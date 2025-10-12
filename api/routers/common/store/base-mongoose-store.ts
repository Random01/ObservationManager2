import { DeleteResult, ObjectId } from 'mongodb';
import { Model } from 'mongoose';

import { PaginatedItems } from './paginated-items.interface';
import { Entity } from '../interfaces';
import { GetItemsParameters } from './get-items-parameters.interface';
import { GetByIdParameter } from './get-by-id-parameter.interface';

export class BaseMongooseStore<TModel extends Model<any>, TEntity extends Entity> {
  constructor(protected readonly model: TModel) {}

  public getAll(): Promise<TEntity[]> {
    return this.model.find().exec();
  }

  public getItems({ requestParameters, userId, populationDetails = {} }: GetItemsParameters): Promise<PaginatedItems<TEntity>> {
    const { page, size, sortField, sortDirection, ...restRequestParams } = requestParameters;

    const request = {
      ...restRequestParams,
      ...(userId ? { userCreated: userId } : undefined),
    };

    const query = this.model.find(request);
    if (sortField != null && sortDirection != null) {
      query.sort({ [sortField]: sortDirection === 'asc' ? 1 : -1 });
    }

    Object.keys(populationDetails).forEach((key) => {
      query.populate(key, populationDetails[key]);
    });

    if (size != null && page != null) {
      query.limit(size).skip(page * size);
    }

    return Promise.all([this.model.find(request).countDocuments(), query.exec()]).then(([totalCount, items]) => ({
      items,
      pageCount: page != null ? page : 0,
      pages: size != null ? Math.ceil(totalCount / size) : 1,
      totalCount,
    }));
  }

  public getById({ id, userId, populationDetails = {} }: GetByIdParameter): Promise<TEntity> {
    const query = this.model.findOne({
      _id: id,
      userCreated: userId,
    });

    Object.keys(populationDetails).forEach((key) => {
      query.populate(key, populationDetails[key]);
    });

    return query.exec();
  }

  public add({ entity, userId }: { entity: TEntity; userId: string }): Promise<TEntity> {
    if (!entity) {
      throw new Error('entity should be provided.');
    }

    const date = new Date();
    const id = new ObjectId(userId);

    return this.model.create({
      ...entity,

      userCreated: id,
      userModified: id,

      dateCreated: date,
      dateModified: date,
    });
  }

  public async update({ entity, userId }: { entity: TEntity; userId: string | undefined }): Promise<TEntity> {
    if (!entity) {
      throw new Error('entity should be provided.');
    }

    const modifiedEntity = {
      ...entity,
      userModified: new ObjectId(userId),
      dateModified: new Date(),
    };

    await this.model.updateOne(
      {
        _id: modifiedEntity.id,
        userCreated: userId,
      },
      modifiedEntity,
    );

    return modifiedEntity;
  }

  public delete({ id, userId }: { id: string; userId: string }): Promise<DeleteResult> {
    return this.model.deleteOne({
      _id: id,
      userCreated: userId,
    });
  }

  public search(_: any): Promise<any[]> {
    return Promise.resolve([]);
  }
}

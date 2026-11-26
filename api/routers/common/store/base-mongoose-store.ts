import { DeleteResult, ObjectId } from 'mongodb';
import { Model } from 'mongoose';

import { PaginatedItems } from './paginated-items.interface';
import { Entity } from '../interfaces';
import { GetItemsParameters } from './get-items-parameters.interface';
import { GetByIdParameter } from './get-by-id-parameter.interface';

const serverManagedFields = new Set(['id', '_id', '__v', 'userCreated', 'userModified', 'dateCreated', 'dateModified']);

function writableFields(entity: Partial<Entity>) {
  return Object.fromEntries(
    Object.entries(entity).filter(([field]) => !serverManagedFields.has(field) && !field.startsWith('$') && !field.includes('.')),
  );
}

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

  public add({ entity, userId }: { entity: Partial<TEntity>; userId: string }): Promise<TEntity> {
    const date = new Date();
    const id = new ObjectId(userId);
    return this.model.create({
      ...writableFields(entity),
      userCreated: id,
      userModified: id,
      dateCreated: date,
      dateModified: date,
    });
  }

  public update({ id, entity, userId }: { id: string; entity: Partial<TEntity>; userId: string }): Promise<TEntity | null> {
    return this.model
      .findOneAndUpdate(
        { _id: id, userCreated: userId },
        { $set: { ...writableFields(entity), userModified: new ObjectId(userId), dateModified: new Date() } },
        { returnDocument: 'after', runValidators: true },
      )
      .exec();
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

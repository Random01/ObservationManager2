import { ObjectId } from 'mongodb';

import { BaseModel } from './base-model.interface';
import { PaginatedItems } from './paginated-items.interface';
import { GetItemsRequestParameters } from './get-items-request-parameters.interface';
import { Entity } from '../interfaces';

export interface GetByIdParameter {
  id: string;
  userId?: string;
  populationDetails?: string[][];
}

export interface GetItemsParameters {
  requestParameters: GetItemsRequestParameters;
  populationDetails?: string[][];
  userId?: string;
}

export class BaseMongooseStore<TModel extends BaseModel, TEntity extends Entity> {

  protected readonly model: TModel;

  constructor(model: TModel) {
    if (!model) {
      throw new Error('model should be defined.');
    }

    this.model = model;
  }

  public getAll(): Promise<TEntity[]> {
    return new Promise<TEntity[]>((success, fail) => {
      this.model.find().exec((err: Error, result: TEntity[]) => {
        if (err) {
          fail(err);
        } else {
          success(result);
        }
      });
    });
  }

  public getItems({ requestParameters, userId, populationDetails = [] }: GetItemsParameters): Promise<PaginatedItems<TEntity>> {
    const {
      page, size, sortField, sortDirection,
      ...restRequestParams
    } = requestParameters;

    const request = {
      ...restRequestParams,
      ...(userId ? { userCreated: userId } : undefined),
    };

    return new Promise((success, fail) => {
      this.model.find(request).count((err: Error, count: number) => {
        if (err) {
          fail(err);
        } else {
          const query = this.model.find(request);

          if (sortField != null && sortDirection != null) {
            query.sort({ [sortField]: sortDirection === 'asc' ? 1 : -1 });
          }

          populationDetails.forEach(items => {
            query.populate(...items);
          });

          if (size != null && page != null) {
            query.limit(size).skip(page * size);
          }

          query.exec((innerError: Error, result: any) => {
            if (innerError) {
              fail(innerError);
            } else {
              success({
                items: result,
                pageCount: page != null ? page : 0,
                pages: size != null ? Math.ceil(count / size) : 1,
                totalCount: count,
              });
            }
          });
        }
      });
    });

  }

  public getById({ id, userId, populationDetails = [] }: GetByIdParameter): Promise<TEntity> {
    return new Promise((success, fail) => {
      const query = this.model.findOne({
        _id: id,
        userCreated: userId,
      });

      populationDetails.forEach(items => {
        query.populate(...items);
      });

      query.exec((err: Error, result: TEntity) => {
        if (err) {
          fail(err);
        } else {
          success(result);
        }
      });
    });
  }

  public add({ entity, userId }: { entity: TEntity; userId: string }): Promise<TEntity> {
    return new Promise<TEntity>((success, fail) => {
      if (!entity) {
        fail(new Error('entity should be provided.'));
        return;
      }

      const date = new Date();
      const id = new ObjectId(userId);

      const modifiedEntity = {
        ...entity,

        userCreated: id,
        userModified: id,

        dateCreated: date,
        dateModified: date,
      };

      this.model.create(modifiedEntity, (err: Error, result: TEntity) => {
        if (err) {
          fail(err);
        } else {
          success(result);
        }
      });
    });
  }

  public update({ entity, userId }: { entity: TEntity; userId: string }): Promise<TEntity> {
    return new Promise<TEntity>((success, fail) => {
      if (!entity) {
        fail(new Error('entity should be provided.'));
        return;
      }

      const modifiedEntity = {
        ...entity,
        userModified: new ObjectId(userId),
        dateModified: new Date(),
      };

      this.model.updateOne({
        _id: modifiedEntity.id,
        userCreated: userId,
      }, modifiedEntity, (err: Error) => {
        if (err) {
          fail(err);
        } else {
          success(modifiedEntity);
        }
      });
    });
  }

  public delete({ id, userId }: { id: string; userId: string }): Promise<void> {
    return new Promise((success, fail) => {
      this.model.deleteOne({
        _id: id,
        userCreated: userId,
      }, (err: Error) => {
        if (err) {
          fail(err);
        } else {
          success(undefined);
        }
      });
    });
  }

  public search(_: any): Promise<any[]> {
    return Promise.resolve([]);
  }

}

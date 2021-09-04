import { ObjectID } from 'mongodb';

import { BaseModel } from './base-model.interface';
import { PaginatedItems } from './paginated-items.interface';
import { GetItemsRequestParameters } from './get-items-request-parameters.interface';
import { Entity } from '../interfaces';

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

    /**
     * @param {*} param
     * @param {Array.<String>} populationDetails
     * @returns {Promise}
     */
    public getItems({
        requestParameters,
        populationDetails,
    }: {
        requestParameters: GetItemsRequestParameters;
        populationDetails?: string[][];
        userId?: string;
    }): Promise<PaginatedItems<TEntity>> {
        const {
            page,
            size,
            sortField,
            sortDirection,
            ...restRequestParams
        } = requestParameters;

        return new Promise((success, fail) => {
            this.model
                .find(restRequestParams || {})
                .count((err: Error, count: number) => {
                    if (err) {
                        fail(err);
                    } else {
                        const query = this.model.find(restRequestParams || {});

                        if (sortField != null && sortDirection != null) {
                            query.sort({
                                [sortField]: sortDirection === 'asc' ? 1 : -1,
                            });
                        }

                        (populationDetails || []).forEach(items => {
                            query.populate(...items);
                        });

                        if (size != null && page != null) {
                            query
                                .limit(size)
                                .skip(page * size);
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

    public getById({
        id,
        userId,
        populationDetails = [],
    }: {
        id: string;
        userId?: string;
        populationDetails?: string[][];
    }): Promise<TEntity> {
        return new Promise((success, fail) => {
            const query = this.model.findOne({
                _id: id,
                userCreated: userId,
            });

            (populationDetails || []).forEach(items => {
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
                fail(new Error('enity should be provided.'));
                return;
            }

            entity.dateCreated = entity.dateModified = new Date();
            entity.userCreated = entity.userModified = new ObjectID(userId);

            this.model.create(entity, (err: Error, result: TEntity) => {
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
                fail(new Error('enity should be provided.'));
                return;
            }

            entity.dateModified = new Date();
            entity.userModified = new ObjectID(userId);

            this.model.updateOne({
                _id: entity.id,
                userCreated: userId,
            }, entity, (err: Error) => {
                if (err) {
                    fail(err);
                } else {
                    success(entity);
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

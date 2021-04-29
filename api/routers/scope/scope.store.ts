import { Connection } from 'mongoose';

import { BaseMongooseStore } from '../common';

import { ScopeSchema } from './scope.schema';

export class ScopeStore extends BaseMongooseStore<any, any> {

    constructor(db: Connection) {
        super(db.model('scopes', ScopeSchema));
    }

    public getById({ id, userId }): Promise<any> {
        return super.getById({
            id,
            userId,
            populationDetails: [
                ['userCreated', '_id userName firstName lastName'],
                ['userModified', '_id userName firstName lastName'],
            ],
        });
    }
}

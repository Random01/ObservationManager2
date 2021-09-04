import { Connection } from 'mongoose';

import { BaseMongooseStore } from '../common';

import { Scope } from './scope.interface';
import { ScopeSchema } from './scope.schema';

export class ScopeStore extends BaseMongooseStore<any, Scope> {

    constructor(db: Connection) {
        super(db.model('scopes', ScopeSchema));
    }

    public getById({ id, userId }) {
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

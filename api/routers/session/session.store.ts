import { Connection } from 'mongoose';

import { BaseMongooseStore } from '../common';

import { Session } from './session.interface';
import { SessionSchema } from './session.schema';

export class SessionStore extends BaseMongooseStore<any, Session> {

    constructor(db: Connection) {
        super(db.model('sessions', SessionSchema));
    }

    public getById({ id, userId }) {
        return super.getById({
            id, userId, populationDetails: [
                ['userCreated', '_id userName firstName lastName'],
                ['userModified', '_id userName firstName lastName'],
                ['site', '_id name'],
            ],
        });
    }

    public getItems({ requestParameters }) {
        return super.getItems({
            requestParameters,
            populationDetails: [
                ['userCreated', '_id userName firstName lastName'],
                ['userModified', '_id userName firstName lastName'],
                ['site', '_id name'],
            ],
        });
    }

}

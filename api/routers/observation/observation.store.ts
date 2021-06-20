import { Connection } from 'mongoose';

import { BaseMongooseStore } from '../common';

import { ObservationSchema } from './observation.schema';

export class ObservationStore extends BaseMongooseStore<any, any> {

    constructor(db: Connection) {
        super(db.model('observations', ObservationSchema));
    }

    public getById({ id, userId }) {
        return super.getById({
            id,
            userId,
            populationDetails: [
                ['userCreated', '_id userName firstName lastName'],
                ['userModified', '_id userName firstName lastName'],
                ['observer', '_id userName firstName lastName'],
                ['site', '_id name'],
                ['session', '_id begin end site'],
                ['scope'],
                ['eyepiece'],
                ['filter', '_id model'],
                ['lens'],
                ['target'],
            ],
        });
    }

    public getItems({ requestParameters, userId }) {
        return super.getItems({
            requestParameters,
            userId,
            populationDetails: [
                ['userCreated', '_id userName firstName lastName'],
                ['userModified', '_id userName firstName lastName'],
                ['observer', '_id userName firstName lastName'],
                ['site', '_id name'],
                ['session', '_id'],
                ['scope', '_id model'],
                ['eyepiece', '_id model'],
                ['filter', '_id model'],
                ['target', '_id name'],
                ['lens', '_id model'],
            ],
        });
    }

}

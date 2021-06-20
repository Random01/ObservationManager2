import { Connection } from 'mongoose';

import { BaseMongooseStore } from '../common';

import { SiteSchema } from './site.schema';

export class SiteStore extends BaseMongooseStore<any, any> {

    constructor(db: Connection) {
        super(db.model('sites', SiteSchema));
    }

    public getById({ id, userId }: { id: string; userId: string }) {
        return super.getById({
            id, userId, populationDetails: [
                ['userCreated', '_id userName firstName lastName'],
                ['userModified', '_id userName firstName lastName'],
            ],
        });
    }

}

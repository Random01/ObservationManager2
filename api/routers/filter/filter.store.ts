import { Connection } from 'mongoose';

import { BaseMongooseStore } from '../common/store/base-mongoose-store';

import { Filter } from './filter.entity';
import { FilterSchema } from './filter.schema';

export class FilterStore extends BaseMongooseStore<any, Filter> {

    constructor(db: Connection) {
        super(db.model('filters', FilterSchema));
    }

    public getById({ id, userId }): Promise<Filter> {
        return super.getById({
            id, userId, populationDetails: [
                ['userCreated', '_id userName firstName lastName'],
                ['userModified', '_id userName firstName lastName'],
            ],
        });
    }

}

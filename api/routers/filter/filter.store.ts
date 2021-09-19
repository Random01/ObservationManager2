import { Connection } from 'mongoose';

import { BaseMongooseStore } from '../common/store';

import { Filter } from './filter.interface';
import { FilterSchema } from './filter.schema';

export class FilterStore extends BaseMongooseStore<any, Filter> {

  constructor(db: Connection) {
    super(db.model('filters', FilterSchema));
  }

  public override getById({ id, userId }: { id: string; userId: string }) {
    return super.getById({
      id, userId, populationDetails: [
        ['userCreated', '_id userName firstName lastName'],
        ['userModified', '_id userName firstName lastName'],
      ],
    });
  }

}

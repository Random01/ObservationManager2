import { BaseMongooseStore } from '../common/store';

import { Filter } from './filter.interface';
import { FilterModel } from './filter.model';

export class FilterStore extends BaseMongooseStore<any, Filter> {

  constructor() {
    super(FilterModel);
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

import { BaseMongooseStore } from '../common/store';

import { Filter } from './filter.interface';
import { FilterModel } from './filter.model';

export class FilterStore extends BaseMongooseStore<typeof FilterModel, Filter> {

  constructor() {
    super(FilterModel);
  }

  public override getById({ id, userId }: { id: string; userId: string }) {
    const userFields = ['_id', 'userName', 'firstName', 'lastName'];
    return super.getById({
      id, userId, populationDetails: {
        'userCreated': userFields,
        'userModified': userFields,
      },
    });
  }

}

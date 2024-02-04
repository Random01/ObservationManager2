import { BaseMongooseStore } from '../common';

import { Scope } from './scope.interface';
import { ScopeModel } from './scope.model';

export class ScopeStore extends BaseMongooseStore<typeof ScopeModel, Scope> {

  constructor() {
    super(ScopeModel);
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

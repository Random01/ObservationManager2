import { BaseMongooseStore } from '../common';

import { Scope } from './scope.interface';
import { ScopeModel } from './scope.model';

export class ScopeStore extends BaseMongooseStore<any, Scope> {

  constructor() {
    super(ScopeModel);
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

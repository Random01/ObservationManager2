import { BaseMongooseStore } from '../common';

import { Lens } from './lens.interface';
import { LensModel } from './lens.model';

export class LensStore extends BaseMongooseStore<typeof LensModel, Lens> {

  constructor() {
    super(LensModel);
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

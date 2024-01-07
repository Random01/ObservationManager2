import { BaseMongooseStore } from '../common';

import { Site } from './site.interface';
import { SiteModel } from './site.model';

export class SiteStore extends BaseMongooseStore<typeof SiteModel, Site> {

  constructor() {
    super(SiteModel);
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

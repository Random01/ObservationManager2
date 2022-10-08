import { BaseMongooseStore } from '../common';

import { Site } from './site.interface';
import { SiteModel } from './site.model';

export class SiteStore extends BaseMongooseStore<any, Site> {

  constructor() {
    super(SiteModel);
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

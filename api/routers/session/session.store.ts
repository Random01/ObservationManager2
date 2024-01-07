import { BaseMongooseStore, GetItemsRequestParameters } from '../common';

import { Session } from './session.interface';
import { SessionModel } from './session.model';

export class SessionStore extends BaseMongooseStore<typeof SessionModel, Session> {

  constructor() {
    super(SessionModel);
  }

  public override getById({ id, userId }: { id: string; userId: string }) {
    const userFields = ['_id', 'userName', 'firstName', 'lastName'];
    return super.getById({
      id, userId, populationDetails: {
        'userCreated': userFields,
        'userModified': userFields,
        'site': ['_id', 'name'],
      },
    });
  }

  public override getItems({ requestParameters, userId }: {
    requestParameters: GetItemsRequestParameters;
    userId: string;
  }) {
    const userFields = ['_id', 'userName', 'firstName', 'lastName'];
    return super.getItems({
      requestParameters,
      populationDetails: {
        'userCreated': userFields,
        'userModified': userFields,
        'site': ['_id', 'name'],
      },
      userId,
    });
  }

}

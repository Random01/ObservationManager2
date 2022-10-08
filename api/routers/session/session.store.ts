import { BaseMongooseStore, GetItemsRequestParameters } from '../common';
import { Session } from './session.interface';
import { SessionModel } from './session.model';

export class SessionStore extends BaseMongooseStore<any, Session> {

  constructor() {
    super(SessionModel);
  }

  public override getById({ id, userId }: { id: string; userId: string }) {
    return super.getById({
      id, userId, populationDetails: [
        ['userCreated', '_id userName firstName lastName'],
        ['userModified', '_id userName firstName lastName'],
        ['site', '_id name'],
      ],
    });
  }

  public override getItems({ requestParameters, userId }:
    {
      requestParameters: GetItemsRequestParameters;
      userId: string;
    }
  ) {
    return super.getItems({
      requestParameters,
      populationDetails: [
        ['userCreated', '_id userName firstName lastName'],
        ['userModified', '_id userName firstName lastName'],
        ['site', '_id name'],
      ],
      userId,
    });
  }

}

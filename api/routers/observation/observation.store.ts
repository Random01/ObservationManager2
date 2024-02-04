import { BaseMongooseStore } from '../common';

import { Observation } from './observation.interface';
import { ObservationModel } from './observation.model';

export class ObservationStore extends BaseMongooseStore<typeof ObservationModel, Observation> {

  constructor() {
    super(ObservationModel);
  }

  public override getById({ id, userId }: { id: string; userId: string }) {
    const userFields = ['_id', 'userName', 'firstName', 'lastName'];
    return super.getById({
      id,
      userId,
      populationDetails: {
        'userCreated': userFields,
        'userModified': userFields,
        'observer': userFields,
        'site': ['_id', 'name'],
        'session': ['_id', 'begin', 'end', 'site'],
        'scope': [],
        'eyepiece': [],
        'filter': ['_id', 'model'],
        'lens': [],
        'target': [],
      },
    });
  }

  public override getItems({ requestParameters, userId }: any) {
    const userFields = ['_id', 'userName', 'firstName', 'lastName'];
    return super.getItems({
      requestParameters,
      userId,
      populationDetails: {
        'userCreated': userFields,
        'userModified': userFields,
        'observer': userFields,
        'site': ['_id', 'name'],
        'session': ['_id'],
        'scope': ['_id', 'model', 'focalLength'],
        'eyepiece': ['_id', 'model', 'focalLength'],
        'filter': ['_id', 'model'],
        'target': ['_id', 'name'],
        'lens': ['_id', 'model'],
      },
    });
  }

}

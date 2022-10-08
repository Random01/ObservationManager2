import { BaseMongooseStore } from '../common';
import { Observation } from './observation.interface';
import { ObservationModel } from './observation.model';

export class ObservationStore extends BaseMongooseStore<any, Observation> {

  constructor() {
    super(ObservationModel);
  }

  public override getById({ id, userId }: { id: string; userId: string }) {
    return super.getById({
      id,
      userId,
      populationDetails: [
        ['userCreated', '_id userName firstName lastName'],
        ['userModified', '_id userName firstName lastName'],
        ['observer', '_id userName firstName lastName'],
        ['site', '_id name'],
        ['session', '_id begin end site'],
        ['scope'],
        ['eyepiece'],
        ['filter', '_id model'],
        ['lens'],
        ['target'],
      ],
    });
  }

  public override getItems({ requestParameters, userId }: any) {
    return super.getItems({
      requestParameters,
      userId,
      populationDetails: [
        ['userCreated', '_id userName firstName lastName'],
        ['userModified', '_id userName firstName lastName'],
        ['observer', '_id userName firstName lastName'],
        ['site', '_id name'],
        ['session', '_id'],
        ['scope', '_id model focalLength'],
        ['eyepiece', '_id model focalLength'],
        ['filter', '_id model'],
        ['target', '_id name'],
        ['lens', '_id model'],
      ],
    });
  }

}

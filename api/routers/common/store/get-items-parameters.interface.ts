import { GetItemsRequestParameters } from './get-items-request-parameters.interface';

export interface GetItemsParameters {
  requestParameters: GetItemsRequestParameters;
  populationDetails?: string[][];
  userId?: string;
}

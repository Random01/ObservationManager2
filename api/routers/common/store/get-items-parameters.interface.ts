import { GetItemsRequestParameters } from './get-items-request-parameters.interface';

export interface GetItemsParameters {
  requestParameters: GetItemsRequestParameters;
  userId?: string;
  populationDetails?: Record<string, string[]>;
}

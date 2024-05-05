export interface GetItemsRequestParameters {
  page?: number;
  size?: number;
  sortField?: string;
  sortDirection?: string;
  userCreated?: string;
  [key: string]: string | number;
}

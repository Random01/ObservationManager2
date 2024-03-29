import { SortOrder } from '../models/sort-order.model';

export interface Param<T = any> {
  name: string;
  value: T;
}

export class RequestParams {

  public page: number;

  public size: number;

  public sortField?: string;

  public sortDirection?: SortOrder;

  constructor(props: Partial<RequestParams> = {}) {
    Object.assign(this, { ...props });
  }

  protected getQueryParams(): Param[] {
    const params: Param[] = [];

    params.push({ name: 'page', value: this.page });
    params.push({ name: 'size', value: this.size });
    params.push({ name: 'sortField', value: this.sortField });
    params.push({ name: 'sortDirection', value: this.sortDirection });

    return params;
  }

  public getQueryString(): string {
    return this.getQueryParams()
      .filter(({ value }) => value != null)
      .map(({ name, value }) => name + '=' + value)
      .join('&');
  }
}

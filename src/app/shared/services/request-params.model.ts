import { SortOrder } from '../models/sort-order.model';

export interface Param<T = any> {
  name: string;
  value: T;
}

export class RequestParams {

  public readonly page: number;

  public readonly size: number;

  public readonly sortField?: string;

  public readonly sortDirection?: SortOrder;

  constructor(props: Partial<RequestParams> = {}) {
    Object.assign(this, { ...props });
  }

  protected getQueryParams(): Param[] {
    return [
      { name: 'page', value: this.page },
      { name: 'size', value: this.size },
      { name: 'sortField', value: this.sortField },
      { name: 'sortDirection', value: this.sortDirection }
    ];
  }

  public getQueryString(): string {
    return this.getQueryParams()
      .filter(({ value }) => value != null)
      .map(({ name, value }) => name + '=' + value)
      .join('&');
  }
}

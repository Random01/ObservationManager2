import { Entity } from '../models/models';
import { ResponseStatus } from './response-status.model';

export class ResultPayload<T extends Entity> {
  declare readonly message: string;
  declare readonly payload: T;
  declare readonly status: ResponseStatus;

  constructor(params?: Partial<ResultPayload<T>>) {
    Object.assign(this, params);
  }

  public isSuccess(): boolean {
    return this.status === ResponseStatus.Ok;
  }
}

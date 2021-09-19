import { Entity } from '../models/models';
import { ResponseStatus } from './response-status.model';

export class ResultPayload<T extends Entity> {

    public readonly message: string;
    public readonly payload: T;
    public readonly status: ResponseStatus;

    constructor(params?: Partial<ResultPayload<T>>) {
        Object.assign(this, params);
    }

    public isSuccess(): boolean {
        return this.status === ResponseStatus.Ok;
    }
}

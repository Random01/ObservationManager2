import { Entity } from '../models/models';
import { ResponseStatus } from './response-status.model';

export class ResultPayload<T extends Entity> {

    public message: string;

    public payload: T;

    public status: ResponseStatus;

    constructor(params?: Partial<ResultPayload<T>>) {
        Object.assign(this, params);
    }

    public isSuccess(): boolean {
        return this.status === ResponseStatus.Ok;
    }
}

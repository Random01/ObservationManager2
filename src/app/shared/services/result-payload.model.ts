import { Entity } from '../models/models';

export class ResultPayload<T extends Entity> {

    public message: string;

    public payload: T;

    public status: number;

    constructor(params?: Partial<ResultPayload<T>>) {
        Object.assign(this, params);
    }

    public isSuccess(): boolean {
        return this.status === 200;
    }
}

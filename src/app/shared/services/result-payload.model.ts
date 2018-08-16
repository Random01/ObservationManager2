import { Entity } from '../models/models';

export class ResultPayload<T extends Entity> {

    public message: string;

    public payload: T;

    public status: number;

    constructor(params?: {
        message?: string,
        payload?: T,
        status?: number
    }) {
        Object.assign(this, params);
    }
}

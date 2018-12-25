import { Entity } from './models';

export class Constellation extends Entity {

    public code: string;

    public name: string;

    constructor(params?: {
        id?: string,
        code?: string,
        name?: string
    }) {
        super(params);
        Object.assign(this, params);
    }

}

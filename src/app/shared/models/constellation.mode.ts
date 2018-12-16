import { Entity } from './models';

export class Constellation extends Entity {

    public name: string;

    constructor(params?: {
        id?: string,
        name?: string
    }) {
        super(params);
        Object.assign(this, params);
    }

}

import { Entity } from './entity.model';

export class Observer extends Entity {

    public name: string;

    public surname: string;

    public contact: string;

    constructor(params?: {
        id?: string,
        name?: string,
        surname?: string,
        contact?: string
    }) {
        super(params);
        Object.assign(this, params);
    }
}

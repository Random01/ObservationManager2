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

    public serialize(): Object {
        return Object.assign(super.serialize(), {
            name: this.name,
            surname: this.surname,
            contact: this.contact
        });
    }

    public deserialize(state: any): void {
        super.deserialize(state);

        this.copy(state, [
            'name',
            'surname',
            'contact'
        ]);
    }
}

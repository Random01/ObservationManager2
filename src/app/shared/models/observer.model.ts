﻿import { Entity } from './entity.model';

export class Observer extends Entity {

    public name: string;

    public surname: string;

    public contact: string;

    constructor(params?: Partial<Observer>) {
        super(params);
        Object.assign(this, params);
    }

    public override serialize(): Object {
        return Object.assign(super.serialize(), {
            name: this.name,
            surname: this.surname,
            contact: this.contact,
        });
    }

    public override deserialize(state: any): void {
        super.deserialize(state);

        this.copy(state, [
            'name',
            'surname',
            'contact',
        ]);
    }
}

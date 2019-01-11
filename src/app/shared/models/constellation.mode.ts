import { Entity } from './entity.model';

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

    public serialize(): Object {
        return Object.assign(super.serialize(), {
            code: this.code,
            name: this.name
        });
    }

    public deserialize(state: any): void {
        super.deserialize(state);

        this.code = state.code;
        this.name = state.name;
    }

}

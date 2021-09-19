import { Entity } from './entity.model';

export class Constellation extends Entity {

    public code: string;

    public name: string;

    constructor(params?: Partial<Constellation>) {
        super(params);
        Object.assign(this, params);
    }

    public override serialize(): Object {
        return Object.assign(super.serialize(), {
            code: this.code,
            name: this.name
        });
    }

    public override deserialize(state: any): void {
        super.deserialize(state);

        this.code = state.code;
        this.name = state.name;
    }

}

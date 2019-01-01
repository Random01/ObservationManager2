import { Serializable } from '../interfaces/serializable.interface';

export class Entity implements Serializable {

    public id: string;

    constructor(params?: {
        id?: string
    }) {
        Object.assign(this, params);
    }

    public serialize(): Object {
        return { id: this.id };
    }

    public deserialize(state: any): void {
        this.id = state.id;
    }

    public isValid(): boolean {
        return this.id != null;
    }
}

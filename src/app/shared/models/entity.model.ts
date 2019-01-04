import { Serializable } from '../interfaces/serializable.interface';

export class Entity implements Serializable {

    public id: string;

    constructor(params?: {
        id?: string
    }) {
        Object.assign(this, params);
    }

    protected copy(state: any, fields: string[]): void {
        for (const field of fields) {
            if (this[field] != null && this[field].deserialize != null) {
                this[field].deserialize(state[field] || {});
            } else {
                this[field] = state[field];
            }
        }
    }

    public serialize(): Object {
        return { id: this.id };
    }

    public deserialize(state: any): void {
        if (typeof state === 'string') {
            this.id = state;
        } else {
            this.id = state._id;
        }
    }

    public isValid(): boolean {
        return this.id != null;
    }
}

import { Serializable } from '../interfaces/serializable.interface';

import * as moment from 'moment';

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

    public serialize(params?: { lightWeight: boolean }): Object {
        if (params != null && params.lightWeight === true) {
            return this.id;
        }
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
        return true;
    }

    protected parseDate(value?: string): Date {
        if (value) {
            return moment(value).toDate();
        }
        return null;
    }

    protected serializeDate(value?: Date): string {
        return value ? value.toISOString() : null;
    }

    protected serializeEntity(value?: Entity) {
        return value ? value.id : null;
    }

    public getDisplayName(): string {
        return null;
    }
}

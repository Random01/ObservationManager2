import { Entity } from '../entity.model';

export class EquipmentItem extends Entity {

    public model: string;

    public vendor: string;

    constructor(params?: {
        id?: string,
        model?: string,
        vendor?: string
    }) {
        super(params);
        Object.assign(this, params);
    }

    public serialize(): Object {
        return Object.assign(super.serialize(), {
            model: this.model,
            vendor: this.vendor
        });
    }

    public deserialize(state: any): void {
        super.deserialize(state);

        this.model = state.model;
        this.vendor = state.vendor;
    }

    public getDisplayName(): string {
        return this.model;
    }

    public isValid(): boolean {
        return this.model != null && this.model.trim().length > 0;
    }
}

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

    serialize(): Object {
        return Object.assign(super.serialize(), {
            model: this.model,
            vendor: this.vendor
        });
    }
}

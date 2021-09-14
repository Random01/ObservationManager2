import { Entity } from './entity.model';

export class EquipmentItem extends Entity {

    public model: string;
    public vendor: string;

    constructor(params: Partial<EquipmentItem>) {
        super(params);

        if (params) {
            if (params.hasOwnProperty('model')) {
                this.model = params.model;
            }
            if (params.hasOwnProperty('vendor')) {
                this.vendor = params.vendor;
            }
        }
    }
}

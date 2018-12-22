import { EquipmentItem } from './equipment-item.model';
import { OpticsType } from './optics-type.model';

export class Optics extends EquipmentItem {

    // Aperture in [mm]
    public aperture?: number;

    // Type of optic. The type is optional but should be given if known!
    public type?: OpticsType;

    constructor(params?: {
        id?: string,
        model?: string,
        vendor?: string,
        focalLength?: number,
        type?: OpticsType
    }) {
        super(params);
        Object.assign(this, params);
    }

    public serialize(): Object {
        return Object.assign(super.serialize(), {
            aperture: this.aperture,
            type: this.type ? this.type.serialize() : null
        });
    }
}

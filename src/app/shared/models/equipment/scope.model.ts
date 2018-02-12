import { EquipmentItem } from './equipment-item.model';

export class Scope extends EquipmentItem {

    public aperture?: number;

    public focalLength?: number;

    constructor(params?: {
        id: string,
        model?: string,
        vendor?: string,
        aperture?: number,
        focalLength?: number
    }) {
        super(params);
        Object.assign(this, params);
    }
}
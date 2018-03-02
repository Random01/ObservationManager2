import { EquipmentItem } from './equipment-item.model';

export class Eyepiece extends EquipmentItem {

    // Focal Length (mm)
    public focalLength: number;
    // Apparent Field of View (deg)
    public apparentFOV: number;

    constructor(params?: {
        id: string,
        model?: string,
        vendor?: string,
        focalLength?: number,
        apparentFOV?: number
    }) {
        super(params);
        Object.assign(this, params);
    }
}

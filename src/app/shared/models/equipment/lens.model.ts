import { EquipmentItem } from './equipment-item.model';

export class Lens extends EquipmentItem {

    public factor: number;

    constructor(params: {
        id: string,
        model?: string,
        vendor?: string,
        factor?: number
    }) {
        super(params);
        Object.assign(this, params);
    }

}
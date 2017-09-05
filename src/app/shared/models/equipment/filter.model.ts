import { EquipmentItem } from './equipment-item.model';

export class Filter extends EquipmentItem {

    public filterType: string;

    // "O-III 2""
    // "Thousand Oaks"
    // "O-III"
    constructor(params?: {
        id: string,
        model?: string,
        vendor?: string,
        filterType?: string
    }) {
        super(params);
        Object.assign(this, params);
    }
}
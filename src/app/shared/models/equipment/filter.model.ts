import { EquipmentItem } from './equipment-item.model';
import { FilterType } from './filter-type.enum';

export class Filter extends EquipmentItem {

    public filterType: FilterType;

    // "O-III 2""
    // "Thousand Oaks"
    // "O-III"
    constructor(params?: {
        id?: string,
        model?: string,
        vendor?: string,
        filterType?: FilterType
    }) {
        super(params);
        Object.assign(this, params);
    }

    public serialize(): Object {
        return Object.assign(super.serialize(), {
            filterType: this.filterType
        });
    }

    public deserialize(state: any): void {
        super.deserialize(state);

        this.filterType = state.filterType;
    }
}

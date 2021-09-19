import { EquipmentItem } from './equipment-item.model';

/**
 * Barlow and Shapley lenses which might be used in addition to an eyepiece
 */
export class Lens extends EquipmentItem {

    /**
     * Factors above 1 define an barlow lens, factors below 1 define a shapley lens.
     */
    public factor: number;

    constructor(params?: Partial<Lens>) {
        super(params);
        Object.assign(this, params);
    }

    public override serialize(): Object {
        return Object.assign(super.serialize(), {
            factor: this.factor,
        });
    }

    public override deserialize(state: any): void {
        super.deserialize(state);

        this.factor = state.factor;
    }

}

import { Entity } from '../entity.model';

export class EquipmentItem extends Entity {

    public model: string;

    public vendor: string;

    constructor(params?: Partial<EquipmentItem>) {
        super(params);
        Object.assign(this, params);
    }

    public override serialize(): Object {
        return Object.assign(super.serialize(), {
            model: this.model,
            vendor: this.vendor,
        });
    }

    public override deserialize(state: any): void {
        super.deserialize(state);

        this.model = state.model;
        this.vendor = state.vendor;
    }

    public override getDisplayName(): string {
        return this.model;
    }

    public override isValid(): boolean {
        return this.model != null && this.model.trim().length > 0;
    }
}

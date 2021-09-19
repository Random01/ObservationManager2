import { Optics } from './optics.model';

/**
 * type definition for optical devices with fixed magnification
 */
export class FixedMagnificationOptics extends Optics {

    public magnification: number;

    public trueField: number;

    constructor(params?: Partial<FixedMagnificationOptics>) {
        super(params);
        Object.assign(this, params);
    }

    public override serialize(): Object {
        return Object.assign(super.serialize(), {
            magnification: this.magnification,
            trueField: this.trueField,
        });
    }

    public override deserialize(state: any): void {
        super.deserialize(state);

        this.magnification = state.magnification;
        this.trueField = state.trueField;
    }

}

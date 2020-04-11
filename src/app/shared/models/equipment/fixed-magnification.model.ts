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

    public serialize(): Object {
        return Object.assign(super.serialize(), {
            magnification: this.magnification,
            trueField: this.trueField,
        });
    }

    public deserialize(state: any): void {
        super.deserialize(state);

        this.magnification = state.magnification;
        this.trueField = state.trueField;
    }

}

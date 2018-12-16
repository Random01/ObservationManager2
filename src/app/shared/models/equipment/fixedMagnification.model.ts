import { Optics } from './optics.model';
import { OpticsType } from './optics-type.model';

/**
 * type definition for optical devices with fixed magnification
 */
export class FixedMagnificationOptics extends Optics {

    public magnification: number;

    public trueField: number;

    constructor(params?: {
        id?: string,
        model?: string,
        vendor?: string,
        aperture?: number,
        magnification?: number,
        trueField?: number,
        type?: OpticsType
    }) {
        super(params);
        Object.assign(this, params);
    }

    public serialize(): Object {
        return Object.assign(super.serialize(), {
            magnification: this.magnification,
            trueField: this.trueField
        });
    }

}

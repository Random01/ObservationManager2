import { Target } from '../../models';

export class DeepSkyTargetType extends Target {

    public smallDiameter: number;

    public largeDiameter: number;

    public visualMagnitude: number;

    /**
     * surface brightness
     * New in V2.0: usage of the new 'surfaceBrightnessType' type, giving the measurement unit explicitly.
     * In older schema versions, mags per square arcmin were used
     */
    public surfaceBrightness: number;

    constructor(params?: Partial<DeepSkyTargetType>) {
        super(params);
        Object.assign(this, params);
    }

    public override serialize(): Object {
        return Object.assign(super.serialize(), {
            smallDiameter: this.smallDiameter,
            largeDiameter: this.largeDiameter,
            visualMagnitude: this.visualMagnitude,
            surfaceBrightness: this.surfaceBrightness,
        });
    }
}

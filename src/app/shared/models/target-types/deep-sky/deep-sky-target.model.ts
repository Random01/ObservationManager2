import { Target } from '../../models';
import { TargetType } from '../../target-type.model';
import { Constellation } from '../../constellation.mode';
import { EquatorialCoordinates } from '../../equatorial-coordinates.model';

export class DeepSkyTargetType extends Target {

    public smallDiameter: number;

    public largeDiameter: number;

    public visualMagnitude: number;

    // surface brightness
    // New in V2.0: usage of the new 'surfaceBrightnessType' type, giving the measurement unit explicitly.
    // In older schema versions, mags per square arcmin were used
    public surfaceBrightness: number;

    constructor(params?: {
        id?: string,
        name?: string,
        targetType?: TargetType,
        alliases?: string[],
        description?: string,
        constellation?: Constellation,
        position?: EquatorialCoordinates,
        smallDiameter?: number,
        largeDiameter?: number,
        visualMagnitude?: number,
        surfaceBrightness?: number
    }) {
        super(params);
        Object.assign(this, params);
    }

    serialize(): Object {
        return Object.assign(super.serialize(), {
            smallDiameter: this.smallDiameter,
            largeDiameter: this.largeDiameter,
            visualMagnitude: this.visualMagnitude,
            surfaceBrightness: this.surfaceBrightness
        });
    }
}

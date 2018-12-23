import { Target } from '../../target.model';
import { TargetType } from '../../target-type.model';
import { Constellation } from '../../constellation.mode';
import { EquatorialCoordinates } from '../../equatorial-coordinates.model';

/**
 * type definition for a single star
 */
export class StartTarget extends Target {

    // apparent magnitude of star in [mag]
    public apparentMag: number;

    // stellar classification like O,B,A,F,G,K,M
    public classification: number;

    constructor(params?: {
        id?: string,
        name?: string,
        targetType?: TargetType,
        alliases?: string[],
        description?: string,
        constellation?: Constellation,
        position?: EquatorialCoordinates,
        apparentMag?: number,
        classification?: string
    }) {
        super(params);
        Object.assign(this, params);
    }

    serialize(): Object {
        return Object.assign(super.serialize(), this, {
            apparentMag: this.apparentMag,
            classification: this.classification
        });
    }

}

import { RA } from './ra.model';
import { Dec } from './dec.model';

export class EquatorialCoordinates {

    /**
     * Right Ascension
     */
    public ra: RA;

    /**
     * Declination
     */
    public dec: Dec;

    constructor(param?: {
        ra: RA,
        dec: Dec
    }) {
        this.ra = new RA();
        this.dec = new Dec();

        Object.assign(this, param);
    }

    public serialize(): Object {
        return { ra: 0, dec: 0 };
    }

}

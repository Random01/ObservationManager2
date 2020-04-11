import { RA } from './ra.model';
import { Dec } from './dec.model';
import { Serializable } from '../interfaces/serializable.interface';

export class EquatorialCoordinates implements Serializable {

    /**
     * Right Ascension
     */
    public ra: RA;

    /**
     * Declination
     */
    public dec: Dec;

    constructor(param?: Partial<EquatorialCoordinates>) {
        this.ra = new RA();
        this.dec = new Dec();

        Object.assign(this, param);
    }

    public serialize(): any {
        return {
            ra: this.ra.serialize(),
            dec: this.dec.serialize(),
        };
    }

    public deserialize(params: any): void {
        this.ra.deserialize(params.ra);
        this.dec.deserialize(params.dec);
    }

}

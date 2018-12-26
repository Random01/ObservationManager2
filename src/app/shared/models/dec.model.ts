import { Serializable } from '../interfaces/serializable.interface';

/**
 * Declination
 */
export class Dec implements Serializable {

    public degrees = 0;

    public arcminutes = 0;

    public arcseconds = 0;

    constructor(params?: {
        degrees?: number,
        arcminutes?: number,
        arcseconds?: number
    }) {
        Object.assign(this, params);
    }

    serialize(): any {
        return this.toDegrees();
    }

    toDegrees(): number {
        // https://en.wikipedia.org/wiki/Minute_and_second_of_arc
        return this.degrees + this.arcminutes / 60.0 + this.arcseconds / 3600;
    }
}

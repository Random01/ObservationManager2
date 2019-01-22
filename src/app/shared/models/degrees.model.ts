import { Serializable } from '../interfaces/serializable.interface';

/**
 * Degrees
 */
export class Degrees implements Serializable {

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

    deserialize(params: any): void {
        this.fromDegrees(params);
    }

    toDegrees(): number {
        // https://en.wikipedia.org/wiki/Minute_and_second_of_arc
        return (this.arcseconds / 3600) + (this.arcminutes / 60.0) + this.degrees;
    }

    fromDegrees(degrees: number): void {
        const degreesFraction = degrees;
        const arcminFraction = (degrees % 1) * 60;
        const arcseconds = (arcminFraction % 1) * 60;

        this.degrees = Math.floor(degreesFraction);
        this.arcminutes = Math.floor(arcminFraction);
        this.arcseconds = Math.floor(arcseconds);
    }
}

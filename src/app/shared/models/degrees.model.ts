import { Serializable } from '../interfaces/serializable.interface';

/**
 * Degrees
 */
export class Degrees implements Serializable {

    public degrees = 0;

    public arcminutes = 0;

    public arcseconds = 0;

    constructor(params?: Partial<Degrees>) {
        Object.assign(this, params);
    }

    public serialize(): any {
        return this.toDegrees();
    }

    public deserialize(params: any): void {
        this.fromDegrees(params);
    }

    public toDegrees(): number {
        // https://en.wikipedia.org/wiki/Minute_and_second_of_arc
        return ((this.arcseconds / 3600.0) + (this.arcminutes / 60.0) + Math.abs(this.degrees)) * Math.sign(this.degrees);
    }

    public fromDegrees(degrees: number): void {
        const sign = Math.sign(degrees);
        degrees = Math.abs(degrees);

        const degreesFraction = degrees;
        const arcminFraction = (degrees % 1) * 60.0;
        const arcseconds = (arcminFraction % 1) * 60.0;

        this.degrees = Math.floor(degreesFraction) * sign;
        this.arcminutes = Math.floor(arcminFraction);
        this.arcseconds = Math.floor(arcseconds);
    }
}

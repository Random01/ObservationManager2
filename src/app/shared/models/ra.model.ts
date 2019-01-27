import { Serializable } from '../interfaces/serializable.interface';

/**
 * Right Ascension.
 * https://en.wikipedia.org/wiki/Right_ascension
 */
export class RA implements Serializable {

    public hours = 0;

    public minutes = 0;

    public seconds = 0;

    constructor(param?: {
        hours: number,
        minutes: number,
        seconds: number
    }) {
        Object.assign(this, param);
    }

    toDegrees(): number {
        // 1h = 15°; 1m = 1/4°; 1s = 1/240°
        return this.seconds / 240.0 + this.minutes / 4.0 + this.hours * 15.0;
    }

    fromDegrees(degrees: number) {
        const hoursFraction = Math.floor(degrees / 15.0);
        const minutesFraction = Math.floor(((degrees / 15.0) - hoursFraction) * 60.0);
        const secondsFraction = ((((degrees / 15.0) - hoursFraction) * 60.0) - minutesFraction) * 60.0;

        this.hours = hoursFraction;
        this.minutes = Math.floor(minutesFraction);
        this.seconds = Math.round(secondsFraction);
    }

    serialize(): any {
        return this.toDegrees();
    }

    deserialize(state: any) {
        this.fromDegrees(state);
    }

}

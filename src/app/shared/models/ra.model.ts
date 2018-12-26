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
        return this.hours * 15 + this.minutes / 4 + this.seconds / 240;
    }

    serialize(): any {
        return this.toDegrees();
    }

}

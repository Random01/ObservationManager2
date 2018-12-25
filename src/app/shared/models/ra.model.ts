/**
 * Right Ascension.
 */
export class RA {

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

}

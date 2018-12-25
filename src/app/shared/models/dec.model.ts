/**
 * Declination
 */
export class Dec {

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

}

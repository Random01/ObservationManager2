/**
 * equatorial coordinates
 */
export class EquatorialCoordinates {

    public ra: number;

    public dec: number;

    constructor(params: {
        ra: number;
        dec: number;
    }) {
        Object.assign(this, params);
    }

    public serialize(): object {
        return {
            ra: this.ra,
            dec: this.dec
        };
    }
}

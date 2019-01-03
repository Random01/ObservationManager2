import { Entity } from './entity.model';
import { GeographicalCoordinates } from './geographical-coordinates.model';

export class Site extends Entity {

    public name: string;
    // <!-- offset from UT in [min] not including daylight savings time -->
    // <!--PLEASE NOTE: West of Greenwich is negative and east is positive -- >
    public timezone: number;

    // <!-- elevation in meters -->
    public elevation: number;
    // <!--IAU Code for site -- >
    public code: number;
    // <!-- geographical longitude; eastwards positive -->
    // <!-- geographical latitude -->
    public coord: GeographicalCoordinates;

    constructor(params?: {
        id?: string,
        name?: string,
        timezone?: number,
        elevation?: number,
        code?: number,
        coord?: GeographicalCoordinates
    }) {
        super(params);

        this.coord = new GeographicalCoordinates();

        Object.assign(this, params);
    }

    serialize(): Object {
        return Object.assign(super.serialize(), {
            name: this.name,
            timezone: this.timezone,
            code: this.code,
            longitude: this.coord.longitude.serialize(),
            latitude: this.coord.latitude.serialize()
        });
    }

    deserialize(state: any): void {
        super.deserialize(state);

        this.name = state.name;
        this.timezone = state.timezone;
        this.code = state.code;

        this.coord.longitude.deserialize(state.longitude);
        this.coord.latitude.deserialize(state.latitude);
    }

}

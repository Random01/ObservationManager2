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

    constructor(params?: Partial<Site>) {
        super(params);
        this.coord = new GeographicalCoordinates();
        Object.assign(this, params);
    }

    public override serialize(): Object {
        return Object.assign(super.serialize(), {
            name: this.name,
            timezone: this.timezone,
            code: this.code,
            elevation: this.elevation,
            longitude: this.coord.longitude.serialize(),
            latitude: this.coord.latitude.serialize(),
        });
    }

    public override deserialize(state: any): void {
        super.deserialize(state);

        this.copy(state, [
            'name',
            'timezone',
            'code',
            'elevation',
        ]);

        this.coord.longitude.deserialize(state.longitude);
        this.coord.latitude.deserialize(state.latitude);
    }

    public override getDisplayName(): string {
        return this.name;
    }

    public override isValid(): boolean {
        return this.name != null && this.name.length > 0;
    }
}

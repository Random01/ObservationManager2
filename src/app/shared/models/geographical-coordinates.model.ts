import { Serializable } from '../interfaces/serializable.interface';
import { Degrees } from './degrees.model';

export class GeographicalCoordinates implements Serializable {

    public latitude: Degrees;
    public longitude: Degrees;

    constructor(params?: Partial<GeographicalCoordinates>) {
        this.latitude = new Degrees();
        this.longitude = new Degrees();

        Object.assign(this, params);
    }

    public serialize(): any {
        return {
            latitude: this.latitude.serialize(),
            longitude: this.longitude.serialize(),
        };
    }

    public deserialize(params: any): void {
        this.latitude.deserialize(params.latitude);
        this.longitude.deserialize(params.longitude);
    }
}

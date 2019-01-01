import { Serializable } from '../interfaces/serializable.interface';
import { Degrees } from './degrees.model';

export class GeographicalCoordinates implements Serializable {

    public lattitude: Degrees;
    public longitude: Degrees;

    constructor(params?: {
        lattitude?: Degrees,
        longitude?: Degrees
    }) {
        this.lattitude = new Degrees();
        this.longitude = new Degrees();

        Object.assign(this, params);
    }

    public serialize(): any {
        return {
            lattitude: this.lattitude.serialize(),
            longitude: this.longitude.serialize()
        };
    }

    public deserialize(params: any): void {
        this.lattitude.deserialize(params.lattitude);
        this.longitude.deserialize(params.longitude);
    }
}

import { Optics } from './optics.model';
import { OpticsType } from './optics-type.model';

/**
 * type definition for telescopes using eyepieces
 */
export class Scope extends Optics {

    // focal length in [mm]
    public focalLength?: number;

    constructor(params?: Partial<Scope>) {
        super(params);
        Object.assign(this, params);
    }

    public serialize(): Object {
        return Object.assign(super.serialize(), {
            focalLength: this.focalLength,
        });
    }

    public deserialize(state: any): void {
        super.deserialize(state);

        this.focalLength = state.focalLength;
    }
}

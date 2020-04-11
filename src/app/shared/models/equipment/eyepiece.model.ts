import { EquipmentItem } from './equipment-item.model';

export class Eyepiece extends EquipmentItem {

    /**
     * Focal Length (mm)
     */
    public focalLength: number;
    /**
     * New in V1.7: upper limit of focal length (used in case of zoom eyepiece) in [mm]
     */
    public maxFocalLength: number;
    /**
     * Apparent Field of View (deg)
     */
    public apparentFOV: number;

    constructor(params?: Partial<Eyepiece>) {
        super(params);
        Object.assign(this, params);
    }

    public serialize(): Object {
        return Object.assign(super.serialize(), {
            focalLength: this.focalLength,
            maxFocalLength: this.maxFocalLength,
            apparentFOV: this.apparentFOV,
        });
    }

    public deserialize(state: any): void {
        super.deserialize(state);

        this.focalLength = state.focalLength;
        this.maxFocalLength = state.maxFocalLength;
        this.apparentFOV = state.apparentFOV;
    }

    public get isZoomEyepiece(): boolean {
        return this.maxFocalLength > 0;
    }

}

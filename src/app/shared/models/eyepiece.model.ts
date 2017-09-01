import { Entity } from './entity.model';

export class Eyepiece extends Entity {
    // Eyepiece Name
    public model: string;

    public vendor: string;
    // Focal Length (mm)
    public focalLength: number;
    // Apparent Field of View (deg)
    public apparentFOV: number;

    constructor(params: {
        id: string,
        model: string,
        vendor?: string,
        focalLength: number,
        apparentFOV: number
    }) {
        super(params);
        Object.assign(this, params);
    }

}
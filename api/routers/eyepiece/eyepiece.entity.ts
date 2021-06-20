import { Entity } from '../common';

export interface Eyepiece extends Entity {
    model: string;
    vendor: string;
    focalLength: number;
    apparentFOV: number;
}

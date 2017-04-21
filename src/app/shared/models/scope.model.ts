import { Entity } from './entity.model'

export class Scope extends Entity {
    public model: string;
    public aperture: number;
    public focalLength: number;
}
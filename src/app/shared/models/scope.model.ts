import { Entity } from './entity.model'

export class Scope extends Entity {
    public model: string;
    public aperture: number;
    public focalLength: number;

    constructor(params: {
        id: string,
        model: string,
        aperture: number,
        focalLength: number
    }) {
        super(params);
        Object.assign(this, params);
    }
}
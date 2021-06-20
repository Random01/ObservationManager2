export class Scope {

    public model: string;
    public aperture: number;
    public focalLength: number;
    public vendor: string;

    constructor(params?: Partial<Scope>) {
        Object.assign(this, { ...params });
    }
}

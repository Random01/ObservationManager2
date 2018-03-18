export class Result {

    public type: string;

    public lang: string;

    public description: string;

    public rating: number;

    constructor(params?: {
        type?: string,
        lang?: string,
        description?: string,
        rating?: number
    }) {
        Object.assign(this, params);
    }
}

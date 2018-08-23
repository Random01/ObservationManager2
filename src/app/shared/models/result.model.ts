export class Result {

    public type: string;

    // Language
    public lang: string;

    // Description of the finding
    public description: string;

    // Visual Rating
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

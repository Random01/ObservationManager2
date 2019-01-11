import { Serializable } from '../interfaces/serializable.interface';

export class Result implements Serializable {

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

    public serialize(): Object {
        return {
            type: this.type,
            lang: this.lang,
            description: this.description,
            rating: this.rating
        };
    }

    public deserialize(state: any): void {
        Object.assign(this, state);
    }
}

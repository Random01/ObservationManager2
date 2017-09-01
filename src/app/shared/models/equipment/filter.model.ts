import { Entity } from './../entity.model';

export class Filter extends Entity {
	// "O-III 2""
	public model: string;
	// "Thousand Oaks"
	public vendor: string;
	// "O-III"
	public filterType: string;

	constructor(params: {
        id: string,
        model?: string,
        vendor?: string,
        filterType?: string
    }) {
        super(params);
        Object.assign(this, params);
    }
}
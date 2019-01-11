export class TargetSearchParams {

    public name: string;

    constructor(params?: {
        name?: string
    }) {
        Object.assign(this, params);
    }

}

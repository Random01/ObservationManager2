import { Target, Observation } from '../../shared/models/models';

export class TargetStatistics {

    public target: Target;

    public observations: Observation[];

    constructor(params?: Partial<TargetStatistics>) {
        this.target = new Target();
        this.observations = [];

        Object.assign(this, params);
    }

    public get observed(): boolean {
        return this.observations.length > 0;
    }

}

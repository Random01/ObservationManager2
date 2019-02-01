import { Target, Observation } from '../../shared/models/models';

export class TargetStatistics {

    public target: Target;
    public observations: Observation[];

    constructor(params?: {
        target?: Target,
        observations?: Observation[]
    }) {
        this.target = new Target();
        this.observations = [];

        Object.assign(this, params);
    }

    get observed(): boolean {
        return this.observations.length > 0;
    }

}

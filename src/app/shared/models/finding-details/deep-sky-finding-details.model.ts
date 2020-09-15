import { FindingDetails } from './finding-details.model';

export class DeepSkyFindingDetails extends FindingDetails {

    public smallDiameter: number;
    public largeDiameter: number;
    public stellar: boolean;
    public resolved: boolean;
    public mottled: boolean;
    public laminar: boolean;

    constructor(params?: Partial<DeepSkyFindingDetails>) {
        super(params);
        Object.assign(this, params);
    }

}

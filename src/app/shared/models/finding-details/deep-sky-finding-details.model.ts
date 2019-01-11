import { FindingDetails } from './finding-details.model';

export class DeepSkyFindingDetails extends FindingDetails {
    smallDiameter: number;
    largeDiameter: number;

    stellar?: boolean;
    resolved?: boolean;
    mottled?: boolean;
    laminar?: boolean;

}

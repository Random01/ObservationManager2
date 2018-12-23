import { DeepSkyTargetType } from './deep-sky-target.model';

export class GlobularClusterTarget extends DeepSkyTargetType {

    // name="magStars"
    // magnitude of brightest stars in [mag]
    public brightestStarMagnitude: number;

    // name="conc"
    // degree of concentration [I..XII]
    public concentration: string;

}

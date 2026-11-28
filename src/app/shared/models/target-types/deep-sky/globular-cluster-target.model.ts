import { DeepSkyTargetType } from './deep-sky-target.model';

export class GlobularClusterTarget extends DeepSkyTargetType {
  /**
   * name="magStars"
   * magnitude of brightest stars in [mag]
   */
  declare brightestStarMagnitude: number;

  /**
   * name="conc"
   * degree of concentration [I..XII]
   */
  declare concentration: string;

  constructor(params?: Partial<GlobularClusterTarget>) {
    super(params);
    Object.assign(this, params);
  }
}

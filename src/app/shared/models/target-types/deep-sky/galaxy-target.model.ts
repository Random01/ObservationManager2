import { DeepSkyTargetType } from './deep-sky-target.model';
import { PositionAngle } from '../../position-angle.model';

/**
 * type definition for galaxies
 */
export class GalaxyTarget extends DeepSkyTargetType {

    public hubbleType: string;

    /**
     * position angle of large axis in [deg]
     */
    public positionAngle: PositionAngle;

    constructor(params?: Partial<GalaxyTarget>) {
        super(params);
        Object.assign(this, params);
    }

}

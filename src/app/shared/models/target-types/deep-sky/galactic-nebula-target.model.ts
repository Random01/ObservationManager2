import { DeepSkyTargetType } from './deep-sky-target.model';
import { PositionAngle } from '../../position-angle.model';

export class GalacticNebulaTarget extends DeepSkyTargetType {

    /**
     * indicates emission, reflection or dark nebula
     * not restricted to an enum to cover exotic objects
     */
    public nebulaType: string;

    /**
     * position angle of large axis in [deg]
     */
    public positionAngle: PositionAngle;

    constructor(params?: Partial<GalacticNebulaTarget>) {
        super(params);
        Object.assign(this, params);
    }
}

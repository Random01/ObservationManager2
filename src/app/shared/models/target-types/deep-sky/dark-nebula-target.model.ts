import { DeepSkyTargetType } from './deep-sky-target.model';
import { PositionAngle } from '../../position-angle.model';

export class DarkNebulaTarget extends DeepSkyTargetType {

    // position angle of large axis in [deg]
    public posistionAngle: PositionAngle;

    // opacity acc. to Lynds (1: min, 6:max)
    public opacity: number;

    constructor(params?: Partial<DarkNebulaTarget>) {
        super(params);
        Object.assign(this, params);
    }

}

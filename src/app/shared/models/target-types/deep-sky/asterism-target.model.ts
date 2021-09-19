import { DeepSkyTargetType } from './deep-sky-target.model';
import { PositionAngle } from '../../position-angle.model';

export class AsterismTarget extends DeepSkyTargetType {

    // <!-- position angle of large axis in [deg] -->
    // <xsd:element name="pa" type="oal:positionAngleType" minOccurs="0"/>
    public positionAngle: PositionAngle;

    constructor(params?: Partial<AsterismTarget>) {
        super(params);
        Object.assign(this, params);
    }

    public override serialize(): Object {
        return Object.assign(super.serialize(), this, {
            positionAngle: this.positionAngle ? this.positionAngle.serialize() : null,
        });
    }
}

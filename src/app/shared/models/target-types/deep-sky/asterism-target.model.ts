import { DeepSkyTargetType } from './deep-sky-target.model';
import { PositionAngle } from '../../position-angle.model';
import { TargetType } from '../../target-type.model';
import { Constellation } from '../../constellation.mode';
import { EquatorialCoordinates } from '../../equatorial-coordinates.model';

export class AsterismTarget extends DeepSkyTargetType {

    // <!-- position angle of large axis in [deg] -->
    // <xsd:element name="pa" type="oal:positionAngleType" minOccurs="0"/>
    public positionAngle: PositionAngle;

    constructor(params?: {
        id?: string,
        name?: string,
        targetType?: TargetType,
        alliases?: string[],
        description?: string,
        constellation?: Constellation,
        position?: EquatorialCoordinates,
        smallDiameter?: number,
        largeDiameter?: number,
        visualMagnitude?: number,
        surfaceBrightness?: number,
        positionAngle?: PositionAngle
    }) {
        super(params);
        Object.assign(this, params);
    }

    serialize(): Object {
        return Object.assign(super.serialize(), this, {
            positionAngle: this.positionAngle ? this.positionAngle.serialize() : null
        });
    }
}

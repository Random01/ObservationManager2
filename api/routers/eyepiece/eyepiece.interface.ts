import { EquipmentEntity } from '../common';

export interface Eyepiece extends EquipmentEntity {
    focalLength: number;
    maxFocalLength: number;
    apparentFOV: number;
}

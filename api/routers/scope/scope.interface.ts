import { EquipmentEntity } from '../common';

export interface Scope extends EquipmentEntity {
    aperture: number;
    focalLength: number;
}

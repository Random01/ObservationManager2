import { EquipmentEntity } from '../common';

export interface Eyepiece extends EquipmentEntity {
  readonly focalLength: number;
  readonly maxFocalLength: number;
  readonly apparentFOV: number;
}

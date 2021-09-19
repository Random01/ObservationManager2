import { EquipmentEntity } from '../common';

export interface Scope extends EquipmentEntity {
  readonly aperture: number;
  readonly focalLength: number;
}

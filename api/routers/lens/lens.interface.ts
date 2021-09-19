import { EquipmentEntity } from '../common';

export interface Lens extends EquipmentEntity {
  readonly factor: number;
}

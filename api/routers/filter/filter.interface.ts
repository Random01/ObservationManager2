import { EquipmentEntity } from '../common';

export interface Filter extends EquipmentEntity {
  readonly filterType: string;
}

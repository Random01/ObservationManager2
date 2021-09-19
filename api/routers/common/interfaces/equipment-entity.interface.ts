import { Entity } from './entity.interface';

export interface EquipmentEntity extends Entity {
  readonly model: string;
  readonly vendor: string;
}

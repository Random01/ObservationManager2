import { Entity } from './entity.model';

export class EquipmentItem extends Entity {

  public readonly model: string;
  public readonly vendor: string;

  constructor(params?: Partial<EquipmentItem>) {
    super(params);
  }
}

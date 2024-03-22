import { Entity } from './entity.model';

export class EquipmentItem extends Entity {

  public readonly model: string | undefined;
  public readonly vendor: string | undefined;

  constructor(params?: Partial<EquipmentItem>) {
    super(params);
  }
}

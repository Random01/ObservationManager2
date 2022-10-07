import { EquipmentItem } from './equipment-item.model';
import { OpticsType } from './optics-type.model';

export class Optics extends EquipmentItem {

  /**
   * Aperture in [mm]
   */
  public aperture?: number;

  /**
   * Type of optic. The type is optional but should be given if known!
   */
  public type?: OpticsType;

  constructor(params?: Partial<Optics>) {
    super(params);
  }

  public override serialize(): Object {
    return Object.assign(super.serialize(), {
      aperture: this.aperture,
      type: this.type ? this.type.serialize() : null,
    });
  }

  public override deserialize(state: any): void {
    super.deserialize(state);

    this.aperture = state.aperture;
    this.type = state.type;
  }
}

import { Target } from '../../models';

export class DeepSkyTargetType extends Target {
  declare smallDiameter: number;

  declare largeDiameter: number;

  declare visualMagnitude: number;

  /**
   * surface brightness
   * New in V2.0: usage of the new 'surfaceBrightnessType' type, giving the measurement unit explicitly.
   * In older schema versions, mags per square arcmin were used
   */
  declare surfaceBrightness: number;

  constructor(params?: Partial<DeepSkyTargetType>) {
    super(params);
    Object.assign(this, params);
  }

  public override serialize(): Record<string, any> {
    return Object.assign(super.serialize(), {
      smallDiameter: this.smallDiameter,
      largeDiameter: this.largeDiameter,
      visualMagnitude: this.visualMagnitude,
      surfaceBrightness: this.surfaceBrightness,
    });
  }
}

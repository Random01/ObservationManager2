import { Serializable } from '../interfaces/serializable.interface';

export class Result implements Serializable {
  declare type: string;

  /**
   * Language
   */
  declare lang: string;

  /**
   * Description of the finding
   */
  declare description: string;

  /**
   * Visual Rating
   */
  declare rating: number;

  constructor(params?: Partial<Result>) {
    Object.assign(this, params);
  }

  public serialize(): Record<string, any> {
    return {
      type: this.type,
      lang: this.lang,
      description: this.description,
      rating: this.rating,
    };
  }

  public deserialize(state: any): void {
    Object.assign(this, state);
  }
}

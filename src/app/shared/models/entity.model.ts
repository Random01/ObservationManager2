import { Serializable } from '../interfaces/serializable.interface';

import moment from 'moment';

export class Entity implements Serializable {
  declare id: string;

  public userCreated?: Entity;
  public userUpdated?: Entity;

  public description?: string;

  constructor(params?: Partial<Entity>) {
    Object.assign(this, params);
  }

  public serialize(params?: { lightWeight: boolean }): any {
    if (params != null && params.lightWeight === true) {
      return this.id;
    }
    return {
      id: this.id,
      description: this.description,
    };
  }

  public deserialize(state: any): void {
    if (typeof state === 'string') {
      this.id = state;
    } else {
      this.id = state._id;
      this.description = state.description;

      if (state.userCreated) {
        this.userCreated = new Entity({ id: state.userCreated._id });
      }
      if (state.userUpdated) {
        this.userUpdated = new Entity({ id: state.userUpdated._id });
      }
    }
  }

  public isValid(): boolean {
    return true;
  }

  public getDisplayName(): string | null {
    return null;
  }

  protected parseDate(value?: string): Date | null {
    if (value) {
      return moment(value).toDate();
    }
    return null;
  }

  protected serializeDate(value?: Date | null): string | null {
    return value ? value.toISOString() : null;
  }

  protected serializeEntity(value?: Entity | null): string | null {
    return value ? value.id : null;
  }

  protected copy(state: any, fields: string[]): void {
    const entity = this as unknown as Record<string, unknown>;
    for (const field of fields) {
      const value = entity[field];
      if (value && typeof value === 'object' && 'deserialize' in value && typeof value.deserialize === 'function') {
        value.deserialize(state[field] || {});
      } else {
        entity[field] = state[field];
      }
    }
  }
}

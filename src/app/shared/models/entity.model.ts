import { Serializable } from '../interfaces/serializable.interface';

import moment from 'moment';

export class Entity implements Serializable {

  public id: string;

  public userCreated: Entity;
  public userUpdated: Entity;

  public description: string;

  constructor(params?: Partial<Entity>) {
    Object.assign(this, params);
  }

  public serialize(params?: { lightWeight: boolean }): Object {
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

  public getDisplayName(): string {
    return null;
  }

  protected parseDate(value?: string): Date {
    if (value) {
      return moment(value).toDate();
    }
    return null;
  }

  protected serializeDate(value?: Date): string {
    return value ? value.toISOString() : null;
  }

  protected serializeEntity(value?: Entity) {
    return value ? value.id : null;
  }

  protected copy(state: any, fields: string[]): void {
    for (const field of fields) {
      if (this[field] != null && this[field].deserialize != null) {
        this[field].deserialize(state[field] || {});
      } else {
        this[field] = state[field];
      }
    }
  }

}

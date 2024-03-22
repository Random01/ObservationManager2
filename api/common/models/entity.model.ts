import { ObjectId } from 'mongodb';

export class Entity {

  public readonly id: string | undefined;
  public readonly dateCreated: Date | undefined;
  public readonly dateModified: Date | undefined;
  public readonly userCreated: string | undefined;
  public readonly userModified: string | undefined;
  public readonly description: string | undefined;

  constructor(params?: Partial<Entity>) {
    Object.assign(this, params);
  }

  public toId(id: string | undefined): ObjectId | undefined {
    return id != null ? new ObjectId(id) : undefined;
  }

  public toDate(date: Date | undefined): Date | undefined {
    return date;
  }

  public toNumber(number: number | undefined): number | undefined {
    return number;
  }

  public getModel() {
    return {
      id: this.toId(this.id),
      dateCreated: this.toDate(this.dateCreated),
      dateModified: this.toDate(this.dateModified),
      userCreated: this.toId(this.userCreated),
      userModified: this.toId(this.userModified),
      description: this.description,
    };
  }

}

import { ObjectId } from 'mongodb';

export class Entity {

  public readonly id: string;
  public readonly dateCreated: Date;
  public readonly dateModified: Date;
  public readonly userCreated: string;
  public readonly userModified: string;
  public readonly description: string;

  constructor(params: Partial<Entity>) {
    Object.assign(this, params);
  }

  public toId(id: string): ObjectId {
    return id != null ? new ObjectId(id) : undefined;
  }

  public toDate(date: Date): Date {
    return date;
  }

  public toNumber(number: number): number {
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

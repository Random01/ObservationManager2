import { ObjectId } from 'mongodb';

export class Entity {

  public readonly id: string;
  public readonly dateCreated: Date;
  public readonly dateModified: Date;
  public readonly userCreated: string;
  public readonly userModified: string;

  constructor(params: Partial<Entity>) {
    Object.assign(this, params);
  }

  public toId(id: string) {
    return id != null ? new ObjectId(id) : undefined;
  }

  public toDate(date: any) {
    return date;
  }

  public toNumber(number: any) {
    return number;
  }

  public getModel() {
    return {
      id: this.toId(this.id),
      dateCreated: this.toDate(this.dateCreated),
      dateModified: this.toDate(this.dateModified),
      userCreated: this.toId(this.userCreated),
      userModified: this.toId(this.userModified),
    };
  }
}

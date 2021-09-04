import { ObjectID } from 'mongodb';

export class Entity {

    public id: string;
    public dateCreated: Date;
    public dateModified: Date;
    public userCreated: string;
    public userModified: string;

    constructor(params: Partial<Entity>) {
        Object.assign(this, { ...params });
    }

    public toId(id: string) {
        return id != null ? new ObjectID(id) : undefined;
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

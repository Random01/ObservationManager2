import { ObjectID } from 'mongodb';

export interface Entity {
    id: number;

    dateModified?: Date;
    dateCreated?: Date;

    userModified?: ObjectID;
    userCreated?: ObjectID;
}

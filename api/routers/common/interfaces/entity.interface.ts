import { ObjectID } from 'mongodb';

export interface Entity {
    id: ObjectID;

    dateModified?: Date;
    dateCreated?: Date;

    userModified?: ObjectID;
    userCreated?: ObjectID;
}

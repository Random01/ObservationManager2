import { ObjectId } from 'mongodb';

export interface Entity {
  id: ObjectId;

  dateModified?: Date;
  dateCreated?: Date;

  userModified?: ObjectId;
  userCreated?: ObjectId;
}

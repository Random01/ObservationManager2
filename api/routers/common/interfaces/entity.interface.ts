import { ObjectId } from 'mongodb';

export interface Entity {
  readonly id: ObjectId;

  readonly dateModified?: Date;
  readonly dateCreated?: Date;

  readonly userModified?: ObjectId;
  readonly userCreated?: ObjectId;

  readonly description?: string;
}

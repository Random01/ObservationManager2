import type { HydratedDocument, Types } from 'mongoose';

export interface User {
  dateCreated?: Date;
  dateModified?: Date;
  firstName?: string;
  lastName?: string;
  userName: string;
  email: string;
  hash: string;
  salt: string;
}

export interface UserMethods {
  setPassword(password: string): void;
  validPassword(password: string): boolean;
  generateJWT(): string;
  toAuthJSON(): { _id: Types.ObjectId; userName: string; email: string; token: string };
}

export type UserDocument = HydratedDocument<User, UserMethods>;

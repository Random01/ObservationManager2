import { randomBytes, pbkdf2Sync } from 'node:crypto';
import { sign } from 'jsonwebtoken';
import { Model, Schema } from 'mongoose';

import { getAuthSecret } from '../../config/auth-config';
import { User, UserMethods } from './user.interface';

export const UserSchema = new Schema<User, Model<User>, UserMethods>({
  dateCreated: Date,
  dateModified: Date,
  firstName: String,
  lastName: String,

  userName: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "can't be blank"],
    index: true,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "can't be blank"],
    index: true,
  },

  hash: String,
  salt: String,
});

UserSchema.methods.setPassword = function (password: string) {
  this.salt = randomBytes(16).toString('hex');
  this.hash = pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.validPassword = function (password: string) {
  const hash = pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

UserSchema.methods.generateJWT = function () {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 60);
  return sign(
    {
      id: this._id,
      userName: this.userName,
      exp: Math.trunc(exp.getTime() / 1000),
    },
    getAuthSecret(),
  );
};

UserSchema.methods.toAuthJSON = function () {
  return {
    _id: this._id,
    userName: this.userName,
    email: this.email,
    token: this.generateJWT(),
  };
};

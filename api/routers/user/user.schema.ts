import { randomBytes, pbkdf2Sync } from 'crypto';
import { sign } from 'jsonwebtoken';
import { Schema } from 'mongoose';

import { authConfig } from '../../config';
import { User } from './user.interface';

export const UserSchema = new Schema({
  dateCreated: Date,
  dateModified: Date,
  firstName: String,
  lastName: String,

  userName: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, 'can\'t be blank'],
    index: true,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, 'can\'t be blank'],
    index: true,
  },

  hash: String,
  salt: String,
});

UserSchema.methods.setPassword = function (this: User, password: string) {
  this.salt = randomBytes(16).toString('hex');
  this.hash = pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.validPassword = function (this: User, password: string) {
  const hash = pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

UserSchema.methods.generateJWT = function () {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  return sign({
    id: this._id,
    userName: this.userName,
    exp: Math.trunc(exp.getTime() / 1000),
  }, authConfig.secret);
};

UserSchema.methods.toAuthJSON = function () {
  return {
    _id: this._id,
    userName: this.userName,
    email: this.email,
    token: this.generateJWT(),
  };
};

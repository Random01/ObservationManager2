import { randomBytes, pbkdf2Sync } from 'crypto';
import { sign } from 'jsonwebtoken';
import { Schema } from 'mongoose';

import { authConfig } from '../../config';

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

UserSchema.methods.setPassword = function (password: string) {
  const self = this as any;
  self.salt = randomBytes(16).toString('hex');
  self.hash = pbkdf2Sync(password, self.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.validPassword = function (password: string) {
  const self = this as any;
  const hash = pbkdf2Sync(password, self.salt, 10000, 512, 'sha512').toString('hex');
  return self.hash === hash;
};

UserSchema.methods.generateJWT = function () {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  const self = this as any;
  return sign({
    id: self._id,
    userName: self.userName,
    exp: Math.trunc(exp.getTime() / 1000),
  }, authConfig.secret);
};

UserSchema.methods.toAuthJSON = function () {
  const self = this as any;
  return {
    userName: self.userName,
    email: self.email,
    token: self.generateJWT(),
  };
};

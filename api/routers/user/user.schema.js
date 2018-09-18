const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const secret = require('../../config/auth').secret;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    dateCreated: Date,
    dateModified: Date,
    firstName: String,
    lastName: String,

    userName: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, 'can\'t be blank'],
        index: true
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, 'can\'t be blank'],
        index: true
    },

    hash: String,
    salt: String
});

UserSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.validPassword = function (password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
};

UserSchema.methods.generateJWT = function () {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign({
        id: this._id,
        userName: this.userName,
        exp: parseInt(exp.getTime() / 1000),
    }, secret);
};

UserSchema.methods.toAuthJSON = function () {
    return {
        userName: this.userName,
        email: this.email,
        token: this.generateJWT(),
    };
};

mongoose.model('users', UserSchema);

module.exports = UserSchema;
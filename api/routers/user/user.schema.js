const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    dateCreated: Date,
    dateModified: Date,
    firstName: String,
    lastName: String,
    userName: String
});

module.exports = UserSchema;
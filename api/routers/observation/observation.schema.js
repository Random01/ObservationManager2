const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObservationSchema = new Schema({
    dateCreated: Date,
    dateModified: Date,
    userCreated: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    userModified: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    observer: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    site: {
        type: Schema.Types.ObjectId,
        ref: 'sites'
    },
    session: {
        type: Schema.Types.ObjectId,
        ref: 'sessions'
    },
    target: {
        type: Schema.Types.ObjectId,
        ref: 'targets'
    },
    begin: Date,
    end: Date,
    seeing: Number,
    scope: {
        type: Schema.Types.ObjectId, ref: 'scopes'
    },
    eyepiece: {
        type: Schema.Types.ObjectId, ref: 'eyepieces'
    },
    filter: {
        type: Schema.Types.ObjectId, ref: 'filters'
    },
    result: {
        description: String
    }
});

module.exports = ObservationSchema;
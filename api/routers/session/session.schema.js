const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SessionSchema = new Schema({
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

    begin: {
        type: Date
    },
    end: {
        type: Date
    },
    comments: {
        type: String,
        maxlength: 1024
    },
    weather: {
        type: String,
        maxlength: 1024
    },
    equipment: {
        type: String,
        maxlength: 1024
    },
    site: {
        type: Schema.Types.ObjectId,
        ref: 'sites'
    }
});

module.exports = SessionSchema;

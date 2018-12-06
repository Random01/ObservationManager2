const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SessionSchema = new Schema({
    dateCreated: Date,
    dateModified: Date,
    userCreated: { type: Schema.Types.ObjectId, ref: 'users' },
    userModified: { type: Schema.Types.ObjectId, ref: 'users' },

    begin: { type: Date },
    end: { type: Date },
    comments: String,
    weather: String,
    equipment: String,
    site:  { type: Schema.Types.ObjectId, ref: 'sites' }
});

module.exports = SessionSchema;
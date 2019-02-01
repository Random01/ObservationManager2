const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SiteSchema = new Schema({
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
    
    name: String,
    timezone: Number,
    longitude: Number,
    latitude: Number,
    elevation: Number,
    code: String
});

module.exports = SiteSchema;
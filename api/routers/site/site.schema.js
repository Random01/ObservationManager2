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
    
    name: {
        type: String,
        required: true,
        maxlength: 250
    },
    timezone: Number,
    longitude: Number,
    latitude: Number,
    elevation: Number,
    code: {
        type: String,
        maxlength: 250
    }
});

module.exports = SiteSchema;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScopeSchema = new Schema({
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
    
    model: {
        type: String,
        required: true,
        maxlength: 250
    },
    vendor: {
        type: String,
        maxlength: 250
    },
    aperture: {
        type: Number,
        min: 0
    },
    focalLength: {
        type: Number,
        min: 0
    }
});

module.exports = ScopeSchema;
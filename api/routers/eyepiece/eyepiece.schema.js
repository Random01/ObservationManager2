const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EyepieceSchema = new Schema({
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
    
    model: String,
    vendor: String,

    focalLength: Number,
    maxFocalLength: Number,
    apparentFOV: Number
});

module.exports = EyepieceSchema;
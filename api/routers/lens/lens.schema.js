const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LensSchema = new Schema({
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
    factor: Number
});

module.exports = LensSchema;

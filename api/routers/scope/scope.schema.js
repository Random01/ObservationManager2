const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ScopeSchema = new Schema({
    id: Schema.Types.ObjectId,
    dateCreated: Date,
    dateModified: Date,
    userCreated: String,
    userModified: String,
    aperture: Number,
    focalLength: Number,
    model: String,
    vendor: String
});

module.exports = mongoose.model('Scope', ScopeSchema);
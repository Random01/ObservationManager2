const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FilterSchema = new Schema({
    dateCreated: Date,
    dateModified: Date,
    userCreated: { type: Schema.Types.ObjectId, ref: 'users' },
    userModified: { type: Schema.Types.ObjectId, ref: 'users' },
    
    name: String,
    vendor: String,
    filterType: String
});

module.exports = FilterSchema;
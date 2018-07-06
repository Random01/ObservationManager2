const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TargetSchema = new Schema({
    dateCreated: Date,
    dateModified: Date,
    userCreated: { type: Schema.Types.ObjectId, ref: 'users' },
    userModified: { type: Schema.Types.ObjectId, ref: 'users' },
    
    name: String,
    alliases: [String],
    description: String
});

module.exports = TargetSchema;
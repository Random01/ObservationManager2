const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LensSchema = new Schema({
    dateCreated: Date,
    dateModified: Date,
    userCreated: { type: Schema.Types.ObjectId, ref: 'users' },
    userModified: { type: Schema.Types.ObjectId, ref: 'users' },

   vendor: String,
   factor: Number,
   model: String
});

module.exports = LensSchema;
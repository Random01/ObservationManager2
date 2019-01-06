const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObservingProgramSchema = new Schema({
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
    description: String,
    targets: [{ type: Schema.Types.ObjectId, ref: 'targets' }]
});

module.exports = ObservingProgramSchema;
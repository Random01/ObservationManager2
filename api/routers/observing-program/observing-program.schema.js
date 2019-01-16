const ObjectID = require('mongodb').ObjectID;
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
    targets: [{
        type: Schema.Types.ObjectId,
        ref: 'targets'
    }]
});

ObservingProgramSchema.statics.getById = function (id) {
    return new Promise((success, fail) => {
        this.findOne({
            _id: ObjectID(id)
        }, (err, observingProgram) => {
            if (err) {
                fail(err);
            } else {
                success(observingProgram);
            }
        });
    });
};

module.exports = ObservingProgramSchema;

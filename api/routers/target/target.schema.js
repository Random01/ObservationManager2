const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TargetSchema = new Schema({
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
    alliases: [String],
    description: String,
    type: String,
    pos: {
        ra: Number,
        dec: Number
    },
    const: String
});

/**
 * @param {String} name
 * @returns {Promise}
 */
TargetSchema.statics.findByName = function (name) {
    return new Promise((success, fail) => {
        this.find({
            name: new RegExp(name, 'i')
        }, (err, targets) => {
            if (err) {
                fail(err);
            } else {
                success(targets);
            }
        });
    });
};

TargetSchema.statics.findByNames = function (names) {
    return new Promise((success, fail) => {
        this.find({
            name: {
                '$in': names.map(name => name)
            }
        }, (err, targets) => {
            if (err) {
                fail(err);
            } else {
                success(targets);
            }
        });
    });
};

module.exports = TargetSchema;

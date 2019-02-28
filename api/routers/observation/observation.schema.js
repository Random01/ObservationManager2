const ObjectID = require('mongodb').ObjectID;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObservationSchema = new Schema({
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

    observer: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    site: {
        type: Schema.Types.ObjectId,
        ref: 'sites'
    },
    session: {
        type: Schema.Types.ObjectId,
        ref: 'sessions'
    },
    target: {
        type: Schema.Types.ObjectId,
        ref: 'targets'
    },
    begin: Date,
    end: Date,
    seeing: Number,
    scope: {
        type: Schema.Types.ObjectId,
        ref: 'scopes'
    },
    eyepiece: {
        type: Schema.Types.ObjectId,
        ref: 'eyepieces'
    },
    filter: {
        type: Schema.Types.ObjectId,
        ref: 'filters'
    },
    lens: {
        type: Schema.Types.ObjectId,
        ref: 'lenses'
    },
    result: {
        description: {
            type: String,
            maxlength: 1024
        },
    },
    faintestStar: Number,
    skyQuality: Number,
    magnification: Number
});

ObservationSchema.statics.getByTargets = function (targetIds) {
    return new Promise((success, fail) => {
        this.find({
            target: {
                '$in': targetIds.map((targetId) => ObjectID(targetId))
            }
        })
            .exec((err, observations) => {
                if (err) {
                    fail(err);
                } else {
                    success(observations);
                }
            })
    });
};

module.exports = ObservationSchema;
const ObservationSchema = require('./observation.schema');
const BaseMongooseStore = require('./../common/baseMongoose.store');
const ObjectID = require('mongodb').ObjectID;

class ObservationStore extends BaseMongooseStore {
    constructor(db) {
        super(db.model('observations', ObservationSchema));
    }

    getById(id) {
        return new Promise((success, fail) => {
            this.model
                .findOne({ _id: id })
                .populate('userCreated')
                .populate('userModified')
                .populate('observer')
                .populate('site')
                .populate('session')
                .populate('scope')
                .populate('eyepiece')
                .populate('filter')
                .populate('target')
                .exec((err, docs) => {
                    if (err) {
                        fail(err);
                    } else {
                        success(docs);
                    }
                });
        });
    }

    getAll() {
        return new Promise((success, fail) => {
            this.model
                .find()
                .populate('userCreated')
                .populate('userModified')
                .populate('observer')
                .populate('site')
                .populate('session')
                .populate('scope')
                .populate('eyepiece')
                .populate('filter')
                .populate('target')
                .exec((err, docs) => {
                    if (err) {
                        fail(err);
                    } else {
                        success(docs);
                    }
                });
        });
    }

    search({ sessionId } = {}) {
        return new Promise((success, fail) => {
            this.model
                .find({
                    session: sessionId
                })
                .populate('userCreated')
                .populate('userModified')
                .populate('observer')
                .populate('site')
                .populate('session')
                .populate('scope')
                .populate('eyepiece')
                .populate('filter')
                .populate('target')
                .exec((err, docs) => {
                    if (err) {
                        fail(err);
                    } else {
                        success(docs);
                    }
                });
        });
    }

}

module.exports = ObservationStore;
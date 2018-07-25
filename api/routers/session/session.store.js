const SessionSchema = require('./session.schema');
const BaseMongooseStore = require('./../common/baseMongoose.store');

class SessionStore extends BaseMongooseStore {
    constructor(db) {
        super(db.model('sessions', SessionSchema));
    }

    getById(id) {
        return new Promise((success, fail) => {
            this.model
                .findOne({ _id: id })
                .populate('userCreated')
                .populate('userModified')
                .populate('site')
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
                .populate('site')
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

module.exports = SessionStore;
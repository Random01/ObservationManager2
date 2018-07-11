const LensSchema = require('./lens.schema');
const BaseMongooseStore = require('./../common/baseMongoose.store');

class LensStore extends BaseMongooseStore {
    constructor(db) {
        super(db.model('lenses', LensSchema));
    }

    getById(id) {
        return new Promise((success, fail) => {
            this.model
                .findOne({ _id: id })
                .populate('userCreated')
                .populate('userModified')
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

module.exports = LensStore;
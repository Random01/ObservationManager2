const LensSchema = require('./lens.schema');
const BaseMongooseStore = require('./../common/baseMongoose.store');

class LensStore extends BaseMongooseStore {
    constructor(db) {
        super(db.model('lenses', LensSchema));
    }

    getById({ id }) {
        return super.getById({ id, populationDetails: [
            ['userCreated', '_id userName firstName lastName'],
            ['userModified', '_id userName firstName lastName']
        ]});
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
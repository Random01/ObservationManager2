const SiteSchema = require('./site.schema');
const BaseMongooseStore = require('./../common/baseMongoose.store');

class SiteStore extends BaseMongooseStore {

    constructor(db) {
        super(db.model('sites', SiteSchema));
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

}

module.exports = SiteStore;
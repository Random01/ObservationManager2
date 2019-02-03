const SiteSchema = require('./site.schema');
const BaseMongooseStore = require('./../common/baseMongoose.store');

class SiteStore extends BaseMongooseStore {

    constructor(db) {
        super(db.model('sites', SiteSchema));
    }

    getById({ id, userId }) {
        return super.getById({ id, userId, populationDetails: [
            ['userCreated', '_id userName firstName lastName'],
            ['userModified', '_id userName firstName lastName']
        ]});
    }

}

module.exports = SiteStore;
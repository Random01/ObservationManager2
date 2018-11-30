const ScopeSchema = require('./scope.schema');
const BaseMongooseStore = require('./../common/baseMongoose.store');

class ScopeStore extends BaseMongooseStore {
    constructor(db) {
        super(db.model('scopes', ScopeSchema));
    }

    getById({ id }) {
        return super.getById({ id, populationDetails: [
            ['userCreated', '_id userName firstName lastName'],
            ['userModified', '_id userName firstName lastName']
        ]});
    }
}

module.exports = ScopeStore;
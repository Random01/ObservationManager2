const ScopeSchema = require('./scope.schema');
const BaseMongooseStore = require('./../common/baseMongoose.store');

class ScopeStore extends BaseMongooseStore {
    constructor(db) {
        super(db.model('scopes', ScopeSchema));
    }

    getById({ id, userId }) {
        return super.getById({ id, userId, populationDetails: [
            ['userCreated', '_id userName firstName lastName'],
            ['userModified', '_id userName firstName lastName']
        ]});
    }
}

module.exports = ScopeStore;
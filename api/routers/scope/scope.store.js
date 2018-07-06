const ScopeSchema = require('./scope.schema');
const BaseMongooseStore = require('./../common/baseMongoose.store');

class ScopeStore extends BaseMongooseStore {
    constructor(db) {
        super(db.model('scopes', ScopeSchema));
    }
}

module.exports = ScopeStore;
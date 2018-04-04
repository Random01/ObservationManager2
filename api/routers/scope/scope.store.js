const Scope = require('./scope.model');
const BaseStore = require('./../common/base.store');

class ScopeStore extends BaseStore {
    constructor(db) {
        super(db, 'scopes', Scope);
    }
}

module.exports = ScopeStore;
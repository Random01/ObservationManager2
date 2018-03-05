const Scope = require('./scope');
const BaseStore = require('./../common/baseStore');

class ScopesStore extends BaseStore {
    constructor(db) {
        super(db, 'scopes', Scope);
    }
}

module.exports = ScopesStore;
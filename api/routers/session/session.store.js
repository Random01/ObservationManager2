const Session = require('./session.model');
const BaseStore = require('./../common/base.store');

class SessionStore extends BaseStore {
    constructor(db) {
        super(db, 'sessions', Session);
    }
}

module.exports = SessionStore;
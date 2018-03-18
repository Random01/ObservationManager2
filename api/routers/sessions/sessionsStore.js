const Session = require('./session');
const BaseStore = require('./../common/baseStore');

class SessionsStore extends BaseStore {
    constructor(db) {
        super(db, 'sessions', Session);
    }
}

module.exports = SessionsStore;
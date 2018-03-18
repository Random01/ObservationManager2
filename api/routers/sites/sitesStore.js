const Site = require('./site');
const BaseStore = require('./../common/baseStore');

class SitesStore extends BaseStore {
    constructor(db) {
        super(db, 'sites', Site);
    }
}

module.exports = SitesStore;
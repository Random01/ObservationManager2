const Site = require('./site.model');
const BaseStore = require('./../common/base.store');

class SiteStore extends BaseStore {
    constructor(db) {
        super(db, 'sites', Site);
    }
}

module.exports = SiteStore;
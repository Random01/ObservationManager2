const Fillter = require('./filter.model');
const BaseStore = require('./../common/base.store');

class FilterStore extends BaseStore {

    constructor(db) {
        super(db, 'filters', Fillter);
    }

}

module.exports = FilterStore;
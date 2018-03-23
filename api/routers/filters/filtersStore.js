'use strict';

const Fillter = require('./filter');
const BaseStore = require('./../common/baseStore');

class FiltersStore extends BaseStore {

    constructor(db) {
        super(db, 'filters', Fillter);
    }

}

module.exports = FiltersStore;
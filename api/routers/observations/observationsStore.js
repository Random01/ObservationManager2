const Observation = require('./observation');
const BaseStore = require('./../common/baseStore');

class ObservationsStore extends BaseStore {
    constructor(db) {
        super(db, 'observations', Observation);
    }
}

module.exports = ObservationsStore;
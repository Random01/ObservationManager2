const Observation = require('./observation.model');
const BaseStore = require('./../common/base.store');

class ObservationStore extends BaseStore {
    constructor(db) {
        super(db, 'observations', Observation);
    }
}

module.exports = ObservationStore;
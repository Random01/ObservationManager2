const ObservationStore = require('./observation.store');
const RouterFactory = require('./../common/routerFactory');

module.exports = (app, db) => {
    RouterFactory.create(app, new ObservationStore(db), '/observations');
};
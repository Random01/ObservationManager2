const ObservationsStore = require('./observationsStore');
const RouterFactory = require('./../common/routerFactory');

module.exports = (app, db) => {
    RouterFactory.create(app, new ObservationsStore(db), '/observations');
};
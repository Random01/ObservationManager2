const ConstellationStore = require('./constellation.store');
const RouterFactory = require('./../common/routerFactory');

module.exports = (app, db) => {
    RouterFactory.create(app, new ConstellationStore(db), '/constellations');
};
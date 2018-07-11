const LensStore = require('./lens.store');
const RouterFactory = require('./../common/routerFactory');

module.exports = (app, db) => {
    RouterFactory.create(app, new LensStore(db), '/lenses');
};
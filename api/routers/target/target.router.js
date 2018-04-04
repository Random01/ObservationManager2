const TargetStore = require('./target.store');
const RouterFactory = require('./../common/routerFactory');

module.exports = (app, db) => {
    RouterFactory.create(app, new TargetStore(db), '/targets');
};
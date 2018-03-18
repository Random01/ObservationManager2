const TargetsStore = require('./targetsStore');
const RouterFactory = require('./../common/routerFactory');

module.exports = (app, db) => {
    RouterFactory.create(app, new TargetsStore(db), '/targets');
};
const ScopeStore = require('./scope.store');
const RouterFactory = require('./../common/routerFactory');

module.exports = (app, db) => {
    RouterFactory.create(app, new ScopeStore(db), '/scopes');
};
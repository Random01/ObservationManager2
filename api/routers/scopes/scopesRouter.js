const ScopesStore = require('./scopesStore');
const RouterFactory = require('./../common/routerFactory');

module.exports = (app, db) => {
    RouterFactory.create(app, new ScopesStore(db), '/scopes');
};
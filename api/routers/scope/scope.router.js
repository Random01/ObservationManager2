const ScopeStore = require('./scope.store');
const RouterFactory = require('./../common/routerFactory');
const ScopeExporterFactory = require('./scope.exporter.service');

module.exports = (app, db) => {
    RouterFactory.create(app, new ScopeStore(db), '/scopes', new ScopeExporterFactory());
};
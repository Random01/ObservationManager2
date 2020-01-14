const SessionStore = require('./session.store');
const RouterFactory = require('./../common/routerFactory');
const SessionExporterFactory = require('./session.txt-exporter.service');

module.exports = (app, db) => {
    RouterFactory.create(app, new SessionStore(db), '/sessions', new SessionExporterFactory());
};
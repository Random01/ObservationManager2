const FilterStore = require('./filter.store');
const RouterFactory = require('./../common/routerFactory');
const FilterExporterFactory = require('./filter.exporter.service');

module.exports = (app, db) => {
    RouterFactory.create(app, new FilterStore(db), '/filters', new FilterExporterFactory());
};
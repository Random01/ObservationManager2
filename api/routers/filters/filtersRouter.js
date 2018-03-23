'use strict';

const FiltersStore = require('./filtersStore');
const RouterFactory = require('./../common/routerFactory');

module.exports = (app, db) => {
    RouterFactory.create(app, new FiltersStore(db), '/filters');
};
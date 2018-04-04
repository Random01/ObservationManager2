const FilterStore = require('./filter.store');
const RouterFactory = require('./../common/routerFactory');

module.exports = (app, db) => {
    RouterFactory.create(app, new FilterStore(db), '/filters');
};
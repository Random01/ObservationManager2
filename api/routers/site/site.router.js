const SiteStore = require('./site.store');
const RouterFactory = require('./../common/routerFactory');

module.exports = (app, db) => {
    RouterFactory.create(app, new SiteStore(db), '/sites');
};
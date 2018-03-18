const SitesStore = require('./sitesStore');
const RouterFactory = require('./../common/routerFactory');

module.exports = (app, db) => {
    RouterFactory.create(app, new SitesStore(db), '/sites');
};
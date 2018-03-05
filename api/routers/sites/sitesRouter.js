const SitesStore = require('./sitesStore');
const RouterFactory = require('./../common/routerFactory');

module.exports = (app, db) => {

    const store = new SitesStore(db);
    const router = app.route('/sites');
    
    new RouterFactory(store, router);
};
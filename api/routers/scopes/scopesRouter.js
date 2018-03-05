const ScopesStore = require('./scopesStore');
const RouterFactory = require('./../common/routerFactory');

module.exports = (app, db) => {

    const scopesStore = new ScopesStore(db);
    const router = app.route('/scopes');
    
    const scopesRouter = new RouterFactory(scopesStore, router);
};
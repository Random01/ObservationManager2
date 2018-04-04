const SessionStore = require('./session.store');
const RouterFactory = require('./../common/routerFactory');

module.exports = (app, db) => {
    RouterFactory.create(app, new SessionStore(db), '/sessions');
};
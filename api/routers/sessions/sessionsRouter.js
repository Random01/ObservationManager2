const SessionsStore = require('./sessionsStore');
const RouterFactory = require('./../common/routerFactory');

module.exports = (app, db) => {
    RouterFactory.create(app, new SessionsStore(db), '/sessions');
};
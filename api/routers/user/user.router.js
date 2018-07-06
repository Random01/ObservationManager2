const UserStore = require('./user.store');
const RouterFactory = require('./../common/routerFactory');

module.exports = (app, db) => {
    RouterFactory.create(app, new UserStore(db), '/users');
};
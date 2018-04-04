const EyepieceStore = require('./eyepiece.store');
const RouterFactory = require('./../common/routerFactory');

module.exports = (app, db) => {
    RouterFactory.create(app, new EyepieceStore(db), '/eyepieces');
};
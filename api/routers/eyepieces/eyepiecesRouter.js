const EyepiecesStore = require('./eyepiecesStore');
const RouterFactory = require('./../common/routerFactory');

module.exports = (app, db) => {
    RouterFactory.create(app, new EyepiecesStore(db), '/eyepieces');
};
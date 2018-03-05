const EyepiecesStore = require('./eyepiecesStore');
const RouterFactory = require('./../common/routerFactory');

module.exports = (app, db) => {

    const eyepiecesStore = new EyepiecesStore(db);
    const router = app.route('/eyepieces');
    
    new RouterFactory(eyepiecesStore, router);
};
const EyepieceStore = require('./eyepiece.store');
const RouterFactory = require('./../common/routerFactory');
const EyepeiecExporterFactory = require('./eyepiece.exporter.service');

module.exports = (app, db) => {
    RouterFactory.create(app, new EyepieceStore(db), '/eyepieces', new EyepeiecExporterFactory());
};
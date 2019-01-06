const ObservingProgramStore = require('./observing-program.store');
const RouterFactory = require('./../common/routerFactory');

module.exports = (app, db) => {
    RouterFactory.create(app, new ObservingProgramStore(db), '/observing-programs');
};
const ObservingProgramStore = require('./observing-program.store');
const RouterFactory = require('./../common/routerFactory');

const express = require('express');
const auth = require('../authentication/auth');

class ObservingProgramRouter extends RouterFactory {

    static create(app, store, path) {
        const router = express.Router();
        const rf = new ObservingProgramRouter(store, router);

        app.use('/api' + path, router);

        return rf;
    }

    setUp() {
        super.setUp();
    }

}

module.exports = (app, db) => {
    ObservingProgramRouter.create(app, new ObservingProgramStore(db), '/observing-programs');
};

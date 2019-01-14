const ObservationStore = require('./observation.store');
const RouterFactory = require('./../common/routerFactory');

const express = require('express');

class ObservationRouter extends RouterFactory {

    static create(app, store, path) {
        const router = express.Router();
        const rf = new ObservationRouter(store, router);

        app.use('/api' + path, router);

        return rf;
    }

}

module.exports = (app, db) => {
    ObservationRouter.create(app, new ObservationStore(db), '/observations');
};

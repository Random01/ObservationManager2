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

        this.router.get('/overall-statistics/:id', auth.optional, (req, res) => this.getOverallStatistics(req, res));
        this.router.get('/statistics/:id', auth.optional, (req, res) => this.getStatistics(req, res));
    }

    getStatistics(req, res) {
        this.store.getStatistics({
            id: req.params.id,
            userId: this.currentUser ? this.currentUser.id : undefined,
            page: parseFloat(req.query.page),
            size: parseFloat(req.query.size)
        }).then(
            entity => res.json(entity),
            error => this.handleError(res, error)
        );
    }

    getOverallStatistics(req, res) {
        this.store.getOverallStatistics({
            id: req.params.id,
            userId: this.currentUser ? this.currentUser.id : undefined
        }).then(
            entity => res.json(entity),
            error => this.handleError(res, error)
        );
    }

}

module.exports = (app, db) => {
    ObservingProgramRouter.create(app, new ObservingProgramStore(db), '/observing-programs');
};

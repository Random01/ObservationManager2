const TargetStore = require('./target.store');
const RouterFactory = require('./../common/routerFactory');

const express = require('express');

class TargetFactory extends RouterFactory {

    parseRequestParams(req) {
        const requestParams = super.parseRequestParams(req);
        const {
            name
        } = req.query;

        if (name) {
            requestParams.name = new RegExp(name);
        }

        return requestParams;
    }

    static create(app, store, path) {
        const router = express.Router();
        const rf = new TargetFactory(store, router);

        app.use('/api' + path, router);

        return rf;
    }

    getItemsHandler(req, res) {
        const {
            name,
            maxCount
        } = req.query;

        if (name && maxCount) {
            this.store.search({
                name,
                maxCount: parseFloat(maxCount)
            }).then(
                items => res.json(items),
                error => this.handleError(res, error)
            );
        } else {
            return super.getItemsHandler(req, res);
        }
    }
}

module.exports = (app, db) => {
    TargetFactory.create(app, new TargetStore(db), '/targets');
};

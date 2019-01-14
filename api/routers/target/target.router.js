const TargetStore = require('./target.store');
const RouterFactory = require('./../common/routerFactory');

const express = require('express');

class TargetFactory extends RouterFactory {

    parseRequestParams(req) {
        const requestParams = super.parseRequestParams(req);
        const { name } = req.query;

        if (name){
            requestParams.name =  new RegExp(name);
        }

        return requestParams;
    }

    static create(app, store, path) {
        const router = express.Router();
        const rf = new TargetFactory(store, router);

        app.use('/api' + path, router);

        return rf;
    }
}

module.exports = (app, db) => {
    TargetFactory.create(app, new TargetStore(db), '/targets');
};

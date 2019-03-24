const express = require('express');
const auth = require('../authentication/auth');

class RouterFactory {

    constructor(store, router, exporter) {
        if (!store) {
            throw new Error('store should be provided.');
        }
        if (!router) {
            throw new Error('router should be provided.');
        }

        this.store = store;
        this.router = router;
        this.exporter = exporter;

        this.setUp();
    }

    handleError(res, error) {
        console.error(error.message + '; ' + error.stack);

        res.status(500).send({
            success: false,
            errors: [{
                message: error.message,
                stack: error.stack
            }]
        });
    }

    setUp() {
        this.router.get('/export', auth.optional, (req, res) => this.exportItemsHandler(req, res));
        this.router.get('/upload', auth.required, (req, res) => this.uploadHandler(req, res));
        this.router.get('/', auth.optional, (req, res) => this.getItemsHandler(req, res));
        this.router.get('/:id', auth.optional, (req, res) => this.getByIdHandler(req, res));
        this.router.put('/:id', auth.required, (req, res) => this.updateHandler(req, res));
        this.router.delete('/:id', auth.required, (req, res) => this.deleteHandler(req, res));
        this.router.post('/', auth.required, (req, res) => this.addNewHandler(req, res));
    }

    exportItemsHandler(req, res) {
        this.store.getItems({
            requestParams: this.parseRequestParams(req),
            userId: req.payload ? req.payload.id : undefined
        }).then(
            items => this.export(res, items.items),
            error => this.handleError(res, error)
        );
    }

    export(res, items) {
        const exporter = this.exporter.getExporter();
        exporter.export(res, items);
    }

    addNewHandler(req, res) {
        this.store.add({
            entity: this.parse(req),
            userId: req.payload ? req.payload.id : undefined
        }).then(
            entity => res.json(entity),
            error => this.handleError(res, error)
        );
    }

    getByIdHandler(req, res) {
        this.store.getById({
            id: req.params.id,
            userId: req.payload ? req.payload.id : undefined
        }).then(
            entity => res.json(entity),
            error => this.handleError(res, error)
        );
    }

    updateHandler(req, res) {
        this.store.update({
            entity: this.parse(req),
            userId: req.payload ? req.payload.id : undefined
        }).then(
            entity => res.json(entity),
            error => this.handleError(res, error)
        );
    }

    deleteHandler(req, res) {
        this.store.delete({
            id: req.params.id,
            userId: req.payload ? req.payload.id : undefined
        }).then(
            () => res.json({ success: true }),
            error => this.handleError(res, error)
        );
    }

    getItemsHandler(req, res) {
        this.store.getItems({
            requestParams: this.parseRequestParams(req),
            userId: req.payload ? req.payload.id : undefined
        }).then(
            items => res.json(items),
            error => this.handleError(res, error)
        );
    }

    parseRequestParams(req) {
        return Object.assign({}, req.query, {
            size: req.query.size ? parseInt(req.query.size) : undefined,
            page: req.query.page ? parseInt(req.query.page) : undefined
        });
    }

    parse(req) {
        if (this.store.entityConstructor == null) {
            return req.body;
        }
        return new this.store.entityConstructor(req.body);
    }

    createSearchParams(requestParams) {
        return requestParams;
    }

    static create(app, store, path, exporter) {
        const router = express.Router();
        const rf = new RouterFactory(store, router, exporter);

        app.use('/api' + path, router);

        return rf;
    }
}

module.exports = RouterFactory;

const express = require('express');
const auth = require('../authentication/auth');

class RouterFactory {

    constructor(store, router) {
        if (!store) {
            throw new Error('store should be provided.');
        }
        if (!router) {
            throw new Error('router should be provided.');
        }

        this.store = store;
        this.router = router;

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
        this.router.get('/upload', auth.required, (req, res) => this.uploadHandler(req, res));
        this.router.get('/', auth.optional, (req, res) => this.getAllHandler(req, res));
        this.router.get('/:id', auth.optional, (req, res) => this.getByIdHandler(req, res));
        this.router.put('/:id', auth.required, (req, res) => this.updateHandler(req, res));
        this.router.delete('/:id', auth.required, (req, res) => this.deleteHandler(req, res));
        this.router.post('/', auth.required, (req, res) => this.addNewHandler(req, res));
    }

    /**
     * Get all entites.
     */
    getAllHandler(req, res) {
        this.authorize(req.payload);
        this.getItemsHandler(req, res);
    }

    addNewHandler(req, res) {
        this.authorize(req.payload);

        this.store.add(this.parse(req)).then(
            entity => res.json(entity),
            error => this.handleError(res, error)
        );
    }

    getByIdHandler(req, res) {
        this.authorize(req.payload);

        this.store.getById({
            id: req.params.id
        }).then(
            entity => res.json(entity),
            error => this.handleError(res, error)
        );
    }

    authorize(payload) {
        if (payload) {
            this.store.currentUser = {
                id: payload.id
            };
        } else {
            this.store.currentUser = null;
        }
    }

    updateHandler(req, res) {
        this.authorize(req.payload);

        this.store.update(this.parse(req)).then(
            entity => res.json(entity),
            error => this.handleError(res, error)
        );
    }

    deleteHandler(req, res) {
        this.authorize(req.payload);

        this.store.delete(req.params.id).then(
            () => res.json({
                success: true
            }),
            error => this.handleError(res, error)
        );
    }

    getItemsHandler(req, res) {
        this.store.getItems({
            requestParams: this.parseRequestParams(req)
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

    uploadHandler(req, res) {
        this.authorize(req.payload);

        this.store.upload().then(
            () => res.json({
                success: true
            }),
            error => this.handleError(res, error)
        );
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

    static create(app, store, path) {
        const router = express.Router();
        const rf = new RouterFactory(store, router);

        app.use('/api' + path, router);

        return rf;
    }
}

module.exports = RouterFactory;

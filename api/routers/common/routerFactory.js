const express = require('express');

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
        res.send({
            'error': {
                message: error.message,
                stack: error.stack
            }
        });
    }

    setUp() {
        this.router.get('/upload', (req, res) => this.uploadHandler(req, res));
        this.router.get('/', (req, res) => this.getAllHandler(req, res));
        this.router.get('/:id', (req, res) => this.getByIdHandler(req, res));
        this.router.put('/:id', (req, res) => this.updateHandler(req, res));
        this.router.delete('/:id', (req, res) => this.deleteHandler(req, res))
        this.router.post('/', (req, res) => this.addNewHandler(req, res));
    }

    /**
     * Get all entites.
     */
    getAllHandler(req, res) {
        if (req.query.name != null || req.query.maxCount != null) {
            this.searchHandler(req, res);
            return;
        }

        this.store.getAll().then(
            items => res.json(items),
            error => this.handleError(res, error)
        );
    }

    addNewHandler(req, res) {
        this.store.add(this.parse(req)).then(
            entity => res.json(entity),
            error => this.handleError(res, error)
        );
    }

    getByIdHandler(req, res) {
        this.store.getById(req.params.id).then(
            entity => res.json(entity),
            error => this.handleError(res, error)
        );
    }

    updateHandler(req, res) {
        this.store.update(this.parse(req)).then(
            entity => res.json(entity),
            error => this.handleError(res, error)
        );
    }

    deleteHandler(req, res) {
        this.store.delete(req.params.id).then(
            () => res.json({ status: 'Success' }),
            error => this.handleError(res, error)
        );
    }

    searchHandler(req, res) {
        const searchParams = {
            name: req.query.name,
            maxCount: req.query.maxCount != null ? parseInt(req.query.maxCount) : undefined
        };

        this.store.search(searchParams).then(
            items => res.json(items),
            error => this.handleError(res, error)
        );
    }

    uploadHandler(req, res) {
        this.store.upload().then(
            () => res.json({ status: 'Success' }),
            error => this.handleError(res, error)
        );
    }

    parse(req) {
        if (this.store.entityConstructor == null) {
            return req.body;
        }
        return new this.store.entityConstructor(req.body);
    }

    static create(app, store, path) {
        const router = express.Router();
        const rf = new RouterFactory(store, router);

        app.use(path, router);

        return rf;
    }
}

module.exports = RouterFactory;
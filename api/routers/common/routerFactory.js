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
            'error': {
                message: error.message,
                stack: error.stack
            }
        });
    }

    setUp() {
        this.router.get('/upload', auth.required, (req, res) => this.uploadHandler(req, res));
        this.router.get('/', auth.optional, (req, res) => this.getAllHandler(req, res));
        this.router.get('/:id', auth.optional, (req, res) => this.getByIdHandler(req, res));
        this.router.put('/:id', auth.required, (req, res) => this.updateHandler(req, res));
        this.router.delete('/:id', auth.required, (req, res) => this.deleteHandler(req, res))
        this.router.post('/', auth.required, (req, res) => this.addNewHandler(req, res));
    }

    /**
     * Get all entites.
     */
    getAllHandler(req, res) {
        this.authorize(req.payload);

        if (req.query.name != null || req.query.maxCount != null || req.query.sessionId != null) {
            this.searchHandler(req, res);
            return;
        }

        this.store.getAll().then(
            items => res.json(items),
            error => this.handleError(res, error)
        );
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

        this.store.getById(req.params.id).then(
            entity => res.json(entity),
            error => this.handleError(res, error)
        );
    }

    authorize(payload) {
        if (payload) {
            this.store.currentUser = { id: payload.id };
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
            () => res.json({ status: 'Success' }),
            error => this.handleError(res, error)
        );
    }

    searchHandler(req, res) {
        this.authorize(req.payload);

        const searchParams = {
            name: req.query.name,
            maxCount: req.query.maxCount != null ? parseInt(req.query.maxCount) : undefined,
            sessionId: req.query.sessionId
        };

        this.store.search(searchParams).then(
            items => res.json(items),
            error => this.handleError(res, error)
        );
    }

    uploadHandler(req, res) {
        this.authorize(req.payload);

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
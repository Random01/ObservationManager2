const ScopesStore = require('./scopesStore');
const Scope = require('./scope');

module.exports = (app, db) => {

    const router = app.route('/scopes');
    const scopesStore = new ScopesStore(db);

    /**
     * Get all scopes.
     */
    router.get((req, res) => {
        scopesStore.getAll().then(scopes => {
            res.json(scopes);
        }, error => {
            res.send({ 'error': { message: error.message } });
        });
    });

    /**
     * Add a new scope.
     */
    router.post((req, res) => {
        const scope = new Scope({
            model: req.body.model,
            vendor: req.body.vendor,
            aperture: req.body.aperture,
            focalLength: req.body.focalLength
        });

        scopesStore.add(scope).then(scope => {
            res.json(scope);
        }, error => {
            res.send({ 'error': { message: error.message } });
        });
    });

};
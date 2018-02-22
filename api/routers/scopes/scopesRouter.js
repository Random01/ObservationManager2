const ScopesStore = require('./scopesStore');
const Scope = require('./scope');

module.exports = (app, db) => {

    const router = app.route('/scopes');
    const scopesStore = new ScopesStore(db);

    router.get((req, res) => {
        scopesStore.getAll().then(scopes => {
            res.json(scopes);
        });
    });

    router.post((req, res) => {
        const scope = new Scope({
            model: req.body.model,
            title: req.body.title
        });

        scopesStore.add(scope).then(scope => {
            res.json(scope);
        });
    });

};
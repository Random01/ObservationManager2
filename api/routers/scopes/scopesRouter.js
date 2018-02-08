const ScopesStore = require('./scopesStore');
const scopesStore = new ScopesStore();

module.exports = app => {

    const router = app.route('/scopes');

    router.get((req, res) => {
        scopesStore.getAll().then(scopes=>{
            res.json(scopes);
        });
    });

};
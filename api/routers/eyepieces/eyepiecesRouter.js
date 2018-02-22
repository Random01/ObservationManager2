const EyepiecesStore = require('./eyepiecesStore');

module.exports = (app, db) => {

    const eyepiecesStore = new EyepiecesStore(db);
    const router = app.route('/eyepieces');

    router.get((req, res) => {
        eyepiecesStore.getEyepieces().then((eyepieces) => {
            res.json(eyepieces);
        });
    });

};
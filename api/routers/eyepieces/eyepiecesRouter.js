const EyepiecesStore = require('./eyepiecesStore');
const Eyepiece = require('./eyepiece');

module.exports = (app, db) => {

    const router = app.route('/eyepieces');
    const eyepiecesStore = new EyepiecesStore(db);

    router.get((req, res) => {
        eyepiecesStore.getAll().then((eyepieces) => {
            res.json(eyepieces);
        }, error => {
            res.send({ 'error': { message: error.message } });
        });
    });

    router.post((req, res) => {
        const ep = new Eyepiece({
            model: req.body.model,
            vendor: req.body.vendor,
            focalLength: req.body.focalLength,
            apparentFOV: req.body.apparentFOV
        });

        eyepiecesStore.add(ep).then(addedEp => {
            res.json(addedEp);
        }, error => {
            res.send({ 'error': { message: error.message, stack: error.stack } });
        });
    });
};
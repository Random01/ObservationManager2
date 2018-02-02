const EyepiecesStore = require('./eyepiecesStore');
const eyepiecesStore = new EyepiecesStore();

module.exports = app => {

    const router = app.route('/eyepieces');

    router.get((req, res) => {
        eyepiecesStore.getEyepieces().then((eyepieces) => {
            res.json(eyepieces);
        });
    });

};
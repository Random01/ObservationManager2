const Eyepiece = require('./eyepiece');
const _ = require('lodash');

class EyepiecesStore {
    constructor(db) {
        this.db = db;
        this._eyepieces = [
            new Eyepiece({ focalLength: 30, apparentFOV: 82 }),
            new Eyepiece({ focalLength: 20, apparentFOV: 82 }),
            new Eyepiece({ focalLength: 11, apparentFOV: 82 }),
            new Eyepiece({ focalLength: 7, apparentFOV: 82 })
        ];
    }

    /**
     * @returns {Promise}
     */
    getEyepieces() {
        return new Promise((success, fail) => {
            this.db.collection('eyepieces').find({}).toArray((err, items) => {
                if (err) {
                    fail(err);
                } else {
                    const eyepieces = _.map(items, item => {
                        return new Eyepiece({
                            focalLength: item.focalLength,
                            apparentFOV: item.apparentFOV
                        });
                    });
                    success(eyepieces);
                }
            });
        });
    }

    /**
     * 
     * @param {String} id 
     * @returns {Promise}
     */
    getEyepieceById(id) {
        return _.find(this._eyepieces, (eyepiece) => eyepiece.id === id);
    }

    add(eyepiece) {
        return new Promise((success, fail) => {
            this.db.collection('eyepieces').insert(note, (err, result) => {
                if (err) {
                    fail(err);
                } else {
                    success(result.ops[0]);
                }
            });
        });
    }

}

module.exports = EyepiecesStore;
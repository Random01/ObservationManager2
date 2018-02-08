const Eyepiece = require('./eyepiece');
const _ = require('lodash');

class EyepiecesStore {
    constructor() {
        this._eyepieces = [
            new Eyepiece({ focalLength: 30, apparentFOV: 82 }),
            new Eyepiece({ focalLength: 20, apparentFOV: 72 }),
            new Eyepiece({ focalLength: 11, apparentFOV: 82 }),
            new Eyepiece({ focalLength: 7, apparentFOV: 82 })
        ];
    }

    /**
     * @returns {Promise}
     */
    getEyepieces() {
        return Promise.resolve([...this._eyepieces]);
    }

    /**
     * 
     * @param {String} id 
     * @returns {Promise}
     */
    getEyepieceById(id) {
        return _.find(this._eyepieces, (eyepiece) => eyepiece.id === id);
    }

}

module.exports = EyepiecesStore;
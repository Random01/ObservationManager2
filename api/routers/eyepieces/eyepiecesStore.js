const Eyepiece = require('./eyepiece');
const _ = require('lodash');

class EyepiecesStore {
    constructor() {
        this.eyepieces_ = [
            new Eyepiece({ forcalLength: 30, apparentFOV: 82 }),
            new Eyepiece({ forcalLength: 20, apparentFOV: 72 }),
            new Eyepiece({ forcalLength: 11, apparentFOV: 82 }),
            new Eyepiece({ forcalLength: 7, apparentFOV: 82 })
        ];
    }

    /**
     * @returns {Promise}
     */
    getEyepieces() {
        return Promise.resolve([...this.eyepieces_]);
    }

    /**
     * 
     * @param {String} id 
     * @returns {Promise}
     */
    getEyepieceById(id) {
        return _.find(this.eyepieces_, (eyepiece) => eyepiece.id === id);
    }

}

module.exports = EyepiecesStore;
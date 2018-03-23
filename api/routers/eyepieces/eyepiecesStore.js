const Eyepiece = require('./eyepiece');
const BaseStore = require('./../common/baseStore');

class EyepiecesStore extends BaseStore {

    constructor(db) {
        super(db, 'eyepieces', Eyepiece);
    }

}

module.exports = EyepiecesStore;
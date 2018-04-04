const Eyepiece = require('./eyepiece.model');
const BaseStore = require('./../common/base.store');

class EyepieceStore extends BaseStore {

    constructor(db) {
        super(db, 'eyepieces', Eyepiece);
    }

}

module.exports = EyepieceStore;
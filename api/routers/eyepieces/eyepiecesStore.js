const Eyepiece = require('./eyepiece');
const _ = require('lodash');
const BaseStore = require('./../common/baseStore');

class EyepiecesStore extends BaseStore {

    constructor(db) {
        super(db, 'eyepieces', Eyepiece);
    }

}

module.exports = EyepiecesStore;
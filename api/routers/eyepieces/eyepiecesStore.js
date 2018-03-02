const Eyepiece = require('./eyepiece');
const _ = require('lodash');
const BaseStore = require('./../common/baseStore');

class EyepiecesStore extends BaseStore {
    constructor(db) {
        super(db);
    }

    /**
     * @returns {Promise}
     */
    getAll() {
        return new Promise((success, fail) => {
            this.db.collection('eyepieces').find({}).toArray((err, items) => {
                if (err) {
                    fail(err);
                } else {
                    const eyepieces = _.map(items, item => {
                        const ep = new Eyepiece(item);
                        ep.id = item._id;
                        return ep;
                    });
                    success(eyepieces);
                }
            });
        });
    }

    add(eyepiece) {
        return new Promise((success, fail) => {
            this.db.collection('eyepieces').insert(eyepiece, (err, result) => {
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
const Scope = require('./scope');
const ObjectID = require('mongodb').ObjectID;
const _ = require('lodash');
const BaseStore = require('./../common/baseStore');

class ScopesStore extends BaseStore {
    constructor(db) {
        super(db);
    }

    getAll() {
        return new Promise((success, fail) => {
            this.db.collection('scopes').find({}).toArray((err, items) => {
                if (err) {
                    fail(err);
                } else {
                    const scopes = _.map(items, item => {
                        const scope = new Scope(item);
                        scope.id = item._id;
                        return scope;
                    });
                    success(scopes);
                }
            });
        });
    }

    add(scope) {
        return new Promise((success, fail) => {
            this.db.collection('scopes').insert(scope, (err, result) => {
                if (err) {
                    fail(err);
                } else {
                    success(result.ops[0]);
                }
            });
        });
    }

    delete(id) {

    }

}

module.exports = ScopesStore;
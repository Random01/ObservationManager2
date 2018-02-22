const Scope = require('./scope');
const ObjectID = require('mongodb').ObjectID;
const _ = require('lodash');

class ScopesStore {
    constructor() {
        this._scopes = [
            new Scope({ id: 1, vendor: 'Sky-Watcher', model: 'SW254/1200', aperture: 254, focalLength: 1200 }),
            new Scope({ id: 2, vendor: 'Celestron', model: 'C8-N', aperture: 200, focalLength: 1000 }),
            new Scope({ id: 3, vendor: 'Deep Sky', model: 'DS90/500', aperture: 90, focalLength: 500 })
        ];
    }

    getAll() {
        return new Promise((success, fail) => {
            this.db.collection('scopes').find({}).toArray((err, items) => {
                if (err) {
                    fail(err);
                } else {
                    const scopes = _.map(items, item => {
                        return new Scope(item);
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

}

module.exports = ScopesStore;
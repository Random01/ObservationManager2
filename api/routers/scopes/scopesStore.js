const Scope = require('./scope');
const _ = require('lodash');

class ScopesStore {
    constructor() {
        this._scopes = [
            new Scope({ id: 1, vendor: 'Sky-Watcher', aperture: 254, focalLength: 1200 }),
            new Scope({ id: 2, vendor: 'Celestron', aperture: 200, focalLength: 1000 }),
            new Scope({ id: 3, vendor: 'Deep Sky', aperture: 90, focalLength: 500 })
        ];
    }

    getAll() {
        return Promise.resolve([...this._scopes]);
    }

}

module.exports = ScopesStore;
class BaseStore {

    constructor(db){
        this.db = db;
    }

    /**
     * @param {*} entity 
     * @returns {Promise}
     */
    add(entity) {

    }

    update(entity) {

    }

    delete(id) {

    }

    /**
     * @returns {Promise}
     */
    getAll() {

    }
}

module.exports = BaseStore;
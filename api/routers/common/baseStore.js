const _ = require('lodash');
const ObjectID = require('mongodb').ObjectID;

class BaseStore {

    constructor(db, collectionName, entityConstructor) {
        if (!db) {
            throw new Error('db should be defined.');
        }
        if (!collectionName) {
            throw new Error('collectionName should be defined.');
        }
        if (!entityConstructor) {
            throw new Error('entityConstructor should be defined.');
        }

        this.db = db;
        this.collectionName = collectionName;
        this.entityConstructor = entityConstructor;
        this.currentUser = {
            id: '3a91743469ae481004cb710d'
        };
    }

    getCollection() {
        return this.db.collection(this.collectionName);
    }

    convert(item) {
        const entity = new this.entityConstructor(item);
        entity.id = item._id;
        return entity;
    }

    /**
     * @param {*} entity 
     * @returns {Promise}
     */
    add(entity) {
        return new Promise((success, fail) => {
            if (!entity) {
                fail(new Error('enity should be provided.'));
                return;
            }

            delete entity.id;
            
            entity.dateCreated = entity.dateModified = new Date();
            entity.userCreated = entity.userModified = ObjectID(this.currentUser.id);

            this.getCollection().insert(entity, (err, result) => {
                if (err) {
                    fail(err);
                } else {
                    success(result.ops[0]);
                }
            });
        });
    }

    /**
     * @param {*} entity 
     * @returns {Promise}
     */
    update(entity) {

    }

    /**
     * @param {String} id 
     * @returns {Promise}
     */
    delete(id) {

    }

    /**
     * @returns {Promise}
     */
    getAll() {
        return new Promise((success, fail) => {
            this.getCollection().find({}).toArray((err, items) => {
                if (err) {
                    fail(err);
                } else {
                    success(_.map(items, item => this.convert(item)));
                }
            });
        });
    }

    getById(id) {
        return new Promise((success, fail) => {
            this.getCollection().findOne({ '_id': ObjectID(id) }, (err, item) => {
                if (err) {
                    fail(err);
                } else {
                    success(this.convert(item));
                }
            });
        });
    }
}

module.exports = BaseStore;
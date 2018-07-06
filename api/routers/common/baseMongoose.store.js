const ObjectID = require('mongodb').ObjectID;

class BaseMongooseStore {

    constructor(model) {
        if (!model) {
            throw new Error('model should be defined.');
        }

        this.model = model;
        this.currentUser = {
            id: '5b3c99e366453b6a3c3c85d8'
        }
    }

    getAll() {
        return new Promise((success, fail) => {
            this.model.find((err, docs) => {
                if (err) {
                    fail(err);
                } else {
                    success(docs);
                }
            });
        });
    }

    getById(id) {
        return new Promise((success, fail) => {
            this.model
                .findOne({ _id: id })
                .exec((err, docs) => {
                    if (err) {
                        fail(err);
                    } else {
                        success(docs);
                    }
                });
        });
    }

    add(entity) {
        return new Promise((success, fail) => {
            if (!entity) {
                fail(new Error('enity should be provided.'));
                return;
            }

            entity.dateCreated = entity.dateModified = new Date();
            entity.userCreated = entity.userModified = ObjectID(this.currentUser.id);

            this.model.create(entity, (err, result) => {
                if (err) {
                    fail(err);
                } else {
                    success(result);
                }
            });
        });
    }

    update(entity) {
        return new Promise((success, fail) => {
            if (!entity) {
                fail(new Error('enity should be provided.'));
                return;
            }

            entity.dateModified = new Date();
            entity.userModified = ObjectID(this.currentUser.id);

            this.model.updateOne({ _id: entity.id }, entity, (err) => {
                if (err) {
                    fail(err);
                } else {
                    success(entity);
                }
            });
        });
    }

    delete(id) {
        return new Promise((success, fail) => {
            this.model.deleteOne({ _id: id }, err => {
                if (err) {
                    fail(err);
                } else {
                    success();
                }
            });
        });
    }

}

module.exports = BaseMongooseStore;
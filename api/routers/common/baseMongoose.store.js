const ObjectID = require('mongodb').ObjectID;

class BaseMongooseStore {

    constructor(model) {
        if (!model) {
            throw new Error('model should be defined.');
        }

        this.model = model;
    }

    getAll() {
        return new Promise((success, fail) => {
            this.model.find().exec((err, docs) => {
                if (err) {
                    fail(err);
                } else {
                    success(docs);
                }
            });
        });
    }

    /**
     * 
     * @param {*} param
     * @param {Array.<String>} populationDetails
     * @returns {Promise}
     */
    getItems({
        requestParams: {
            page,
            size,
            sortField,
            sortDirection,
            ...restRequestParams
        } = {
            page: 0,
            size: 100
        },
        populationDetails = [],
        userId
    }) {
        restRequestParams = restRequestParams || {};
        if (userId) {
            restRequestParams.userCreated = userId;
        }

        return new Promise((success, fail) => {
            this.model
                .find(restRequestParams)
                .count((err, count) => {
                    if (err) {
                        fail(err);
                    } else {
                        const query = this.model.find(restRequestParams);

                        if (sortField != null && sortDirection != null) {
                            query.sort({
                                [sortField]: sortDirection === 'asc' ? 1 : -1
                            });
                        }

                        populationDetails.forEach((items) => {
                            query.populate(...items);
                        });

                        if (size != null && page != null) {
                            query
                                .limit(size)
                                .skip(page * size);
                        }

                        query.exec((err, docs) => {
                            if (err) {
                                fail(err);
                            } else {
                                success({
                                    items: docs,
                                    pageCount: page != null ? page : 0,
                                    pages: size != null ? Math.ceil(count / size) : 1,
                                    totalCount: count
                                });
                            }
                        });
                    }
                });
        });

    }

    getById({
        id,
        userId,
        populationDetails = []
    }) {
        return new Promise((success, fail) => {

            const query = this.model.findOne({
                _id: id,
                userCreated: userId
            });

            populationDetails.forEach((items) => {
                query.populate(...items);
            });

            query.exec((err, docs) => {
                if (err) {
                    fail(err);
                } else {
                    success(docs);
                }
            });
        });
    }

    add({
        entity,
        userId
    }) {
        return new Promise((success, fail) => {
            if (!entity) {
                fail(new Error('enity should be provided.'));
                return;
            }

            entity.dateCreated = entity.dateModified = new Date();
            entity.userCreated = entity.userModified = ObjectID(userId);

            this.model.create(entity, (err, result) => {
                if (err) {
                    fail(err);
                } else {
                    success(result);
                }
            });
        });
    }

    update({
        entity,
        userId
    }) {
        return new Promise((success, fail) => {
            if (!entity) {
                fail(new Error('enity should be provided.'));
                return;
            }

            entity.dateModified = new Date();
            entity.userModified = ObjectID(userId);

            this.model.updateOne({
                _id: entity.id,
                userCreated: userId
            }, entity, (err) => {
                if (err) {
                    fail(err);
                } else {
                    success(entity);
                }
            });
        });
    }

    delete({
        id,
        userId
    }) {
        return new Promise((success, fail) => {
            this.model.deleteOne({
                _id: id,
                userCreated: userId
            }, (err) => {
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

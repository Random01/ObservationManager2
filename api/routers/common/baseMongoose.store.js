const ObjectID = require('mongodb').ObjectID;

class BaseMongooseStore {

    constructor(model) {
        if (!model) {
            throw new Error('model should be defined.');
        }

        this.model = model;
        this.currentUser = null;
    }

    getAll() {
        return new Promise((success, fail) => {
            let searhParams = null;
            if (this.currentUser) {
                searhParams = { userCreated: this.currentUser.id };
            }

            this.model.find(searhParams, (err, docs) => {
                if (err) {
                    fail(err);
                } else {
                    success(docs);
                }
            });
        });
    }

    getItems({ page, size, sortField, sortDirection } = { page: 0, size: 100 }) {
        return new Promise((success, fail) => {
            this.model.count((err, count)=>{
                if (err) {
                    fail(err);
                } else {
                    const query = this.model.find();
                    
                    if(sortField!=null && sortDirection!=null){
                        const sortQuery = {};
                        sortQuery[sortField] = sortDirection === 'asc' ? 1 : -1;
                        query.sort(sortQuery);
                    }

                    query
                        .limit(size)
                        .skip(page * size)
                        .exec((err, docs)=>{
                            if (err) {
                                fail(err);
                            } else {
                                success({
                                    items: docs,
                                    pageCount: page,
                                    pages: Math.ceil(count / size),
                                    totalCount: count
                                });
                            }
                        });
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
            this.model.deleteOne({ _id: id }, (err) => {
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
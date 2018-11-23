const ObservationSchema = require('./observation.schema');
const BaseMongooseStore = require('./../common/baseMongoose.store');
const ObjectID = require('mongodb').ObjectID;

class ObservationStore extends BaseMongooseStore {
    constructor(db) {
        super(db.model('observations', ObservationSchema));
    }

    getById(id) {
        return new Promise((success, fail) => {
            this.model
                .findOne({ _id: id })
                .populate('userCreated')
                .populate('userModified')
                .populate('observer')
                .populate('site')
                .populate('session')
                .populate('scope')
                .populate('eyepiece')
                .populate('filter')
                .populate('target')
                .exec((err, docs) => {
                    if (err) {
                        fail(err);
                    } else {
                        success(docs);
                    }
                });
        });
    }

    getItems({ page, size } = { page: 0, size: 100 }) {
        return new Promise((success, fail) => {
            this.model.count((err, count)=>{
                if (err) {
                    fail(err);
                } else {
                    this.model
                        .find()
                        .populate('userCreated', '_id userName firstName lastName')
                        .populate('userModified', '_id userName firstName lastName')
                        .populate('observer', '_id userName firstName lastName')
                        .populate('site')
                        .populate('session')
                        .populate('scope')
                        .populate('eyepiece')
                        .populate('filter')
                        .populate('target')
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

    search({ sessionId } = {}) {
        return new Promise((success, fail) => {
            this.model
                .find({
                    session: sessionId
                })
                .populate('userCreated', '_id userName firstName lastName')
                .populate('userModified', '_id userName firstName lastName')
                .populate('observer', '_id userName firstName lastName')
                .populate('site')
                .populate('session')
                .populate('scope')
                .populate('eyepiece')
                .populate('filter')
                .populate('target')
                .exec((err, docs) => {
                    if (err) {
                        fail(err);
                    } else {
                        success(docs);
                    }
                });
        });
    }

}

module.exports = ObservationStore;
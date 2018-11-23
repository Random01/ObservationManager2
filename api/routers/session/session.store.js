const SessionSchema = require('./session.schema');
const BaseMongooseStore = require('./../common/baseMongoose.store');

class SessionStore extends BaseMongooseStore {
    constructor(db) {
        super(db.model('sessions', SessionSchema));
    }

    getById(id) {
        return new Promise((success, fail) => {
            this.model
                .findOne({ _id: id })
                .populate('userCreated', '_id userName firstName lastName')
                .populate('userModified', '_id userName firstName lastName')
                .populate('site')
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
                        .populate('site')
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

}

module.exports = SessionStore;
const ObservationSchema = require('./observation.schema');
const BaseMongooseStore = require('./../common/baseMongoose.store');

class ObservationStore extends BaseMongooseStore {
    constructor(db) {
        super(db.model('observations', ObservationSchema));
    }

    getById({ id }) {
        return super.getById({ id, populationDetails: [
            ['userCreated', '_id userName firstName lastName'],
            ['userModified', '_id userName firstName lastName'],
            ['observer', '_id userName firstName lastName'],
            ['site', '_id name'],
            ['session'],
            ['scope', '_id name'],
            ['eyepiece', '_id name'],
            ['filter', '_id name'],
            ['target']
        ]});
    }

    getItems(requestParams) {
        return super.getItems(
            Object.assign({}, requestParams, { populationDetails: [
                ['userCreated', '_id userName firstName lastName'],
                ['userModified', '_id userName firstName lastName'],
                ['observer', '_id userName firstName lastName'],
                ['site', '_id name'],
                ['session', '_id'],
                ['scope', '_id name'],
                ['eyepiece', '_id name'],
                ['filter', '_id name'],
                ['target']
            ]}));
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
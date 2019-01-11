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
            ['session', '_id begin end site'],
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
                ['scope', '_id model'],
                ['eyepiece', '_id model'],
                ['filter', '_id model'],
                ['target', '_id name']
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
                .populate('site', '_id name')
                .populate('session', '_id')
                .populate('scope', '_id model')
                .populate('eyepiece', '_id model')
                .populate('filter', '_id model')
                .populate('target', '_id name')
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
const ObservationSchema = require('./observation.schema');
const BaseMongooseStore = require('./../common/baseMongoose.store');

class ObservationStore extends BaseMongooseStore {
    constructor(db) {
        super(db.model('observations', ObservationSchema));
    }

    getById({ id, userId }) {
        return super.getById({ id, userId, populationDetails: [
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

    getItems({ requestParams, userId }) {
        return super.getItems(
            Object.assign({}, { requestParams, userId }, { populationDetails: [
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

}

module.exports = ObservationStore;
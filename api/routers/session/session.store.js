const SessionSchema = require('./session.schema');
const BaseMongooseStore = require('./../common/baseMongoose.store');

class SessionStore extends BaseMongooseStore {
    constructor(db) {
        super(db.model('sessions', SessionSchema));
    }

    getById({ id }) {
        return super.getById({ id, populationDetails: [
            ['userCreated', '_id userName firstName lastName'],
            ['userModified', '_id userName firstName lastName'],
            ['site', '_id name']
        ]});
    }

    getItems(requestParams) {
        return super.getItems(
            Object.assign({}, requestParams, { populationDetails: [
                ['userCreated', '_id userName firstName lastName'],
                ['userModified', '_id userName firstName lastName'],
                ['site', '_id name']
            ]}));
    }

}

module.exports = SessionStore;
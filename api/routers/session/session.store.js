const SessionSchema = require('./session.schema');
const BaseMongooseStore = require('./../common/baseMongoose.store');

class SessionStore extends BaseMongooseStore {
    constructor(db) {
        super(db.model('sessions', SessionSchema));
    }

    getById({ id, userId }) {
        return super.getById({ id, userId, populationDetails: [
            ['userCreated', '_id userName firstName lastName'],
            ['userModified', '_id userName firstName lastName'],
            ['site', '_id name']
        ]});
    }

    getItems({ requestParams, userId }) {
        return super.getItems(
            Object.assign({}, { requestParams, userId }, { populationDetails: [
                ['userCreated', '_id userName firstName lastName'],
                ['userModified', '_id userName firstName lastName'],
                ['site', '_id name']
            ]}));
    }

}

module.exports = SessionStore;
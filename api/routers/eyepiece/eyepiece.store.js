const EyepieceSchema = require('./eyepiece.schema');
const BaseMongooseStore = require('./../common/baseMongoose.store');

class EyepieceStore extends BaseMongooseStore {

    constructor(db) {
        super(db.model('eyepieces', EyepieceSchema));
    }
    
    getById({ id, userId }) {
        return super.getById({ id, userId, populationDetails: [
            ['userCreated', '_id userName firstName lastName'],
            ['userModified', '_id userName firstName lastName']
        ]});
    }
}

module.exports = EyepieceStore;
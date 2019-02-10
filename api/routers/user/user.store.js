const UserSchema = require('./user.schema');
const BaseMongooseStore = require('./../common/baseMongoose.store');

class UserStore extends BaseMongooseStore {

    constructor(db) {
        super(db.model('users', UserSchema));
    }

    getItems({ requestParams }) {
        return super.getItems(Object.assign({}, { requestParams }));
    }

}

module.exports = UserStore;
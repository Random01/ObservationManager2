const UserSchema = require('./user.schema');
const BaseMongooseStore = require('./../common/baseMongoose.store');

class UserStore extends BaseMongooseStore {

    constructor(db) {
        super(db.model('users', UserSchema));
    }

}

module.exports = UserStore;
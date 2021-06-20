import { Connection } from 'mongoose';

import { BaseMongooseStore } from '../common/store/base-mongoose-store';

import { UserSchema } from './user.schema';

export class UserStore extends BaseMongooseStore<any, any> {

    constructor(db: Connection) {
        super(db.model('users', UserSchema));
    }

}

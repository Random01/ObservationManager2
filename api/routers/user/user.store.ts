import { BaseMongooseStore } from '../common/store/base-mongoose-store';
import { UserModel } from './user.model';

export class UserStore extends BaseMongooseStore<typeof UserModel, any> {
  constructor() {
    super(UserModel);
  }
}

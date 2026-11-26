import { UserModel } from './user.model';

export class UserStore {
  public getById(id: string) {
    return UserModel.findById(id).exec();
  }

  public create({ userName, email, password }: { userName: string; email: string; password: string }) {
    const user = new UserModel({ userName, email });
    user.setPassword(password);
    return user.save();
  }
}

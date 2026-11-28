import { User } from '../../shared/models/user.model';

export class SignInResultPayload {
  declare token: string;

  declare user: User;

  constructor(params?: Partial<SignInResultPayload>) {
    Object.assign(this, params);
  }
}

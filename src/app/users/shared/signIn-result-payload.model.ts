import { User } from '../../shared/models/user.model';

export class SignInResultPayload {

    public token: string;

    public user: User;

    constructor(params?: Partial<SignInResultPayload>) {
        Object.assign(this, params);
    }
}

import { User } from '../../shared/models/user.model';

export class SignInResultPayload {

    public token: string;

    public user: User;

    constructor(params?: {
        token?: string,
        user?: User
    }) {
        Object.assign(this, params);
    }
}

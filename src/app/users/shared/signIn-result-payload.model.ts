import { User } from '../../shared/models/user.model';

export class SignInResultPayload {

    token: string;

    user: User;

    constructor(params?: {
        token?: string,
        user?: User
    }) {
        Object.assign(this, params);
    }
}

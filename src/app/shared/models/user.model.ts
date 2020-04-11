import { Entity } from './models';
import { UserRole } from './user-role.model';

export class User extends Entity {

    public firstName: string;

    public lastName: string;

    public userName: string;

    public password: string;

    public email: string;

    public role: UserRole;

    constructor(params?: Partial<User>) {
        super(params);
        Object.assign(this, params);
    }

    public serialize(): Object {
        return Object.assign(super.serialize(), {
            firstName: this.firstName,
            lastName: this.lastName,
            userName: this.userName,
            password: this.password,
            email: this.email,
            role: this.role,
        });
    }

    public deserialize(state: any): void {
        super.deserialize(state);

        this.copy(state, [
            'firtName',
            'lastName',
            'userName',
            'password',
            'email',
            'role',
        ]);
    }

    public isAdmin(): boolean {
        return this.role === UserRole.Admin || this.role === UserRole.SuperAdmin;
    }
}

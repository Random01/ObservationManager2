import { Entity } from './models';

export class User extends Entity {

    firstName: string;

    lastName: string;

    userName: string;

    password: string;

    email: string;

    constructor(params?: {
        id?: string,
        firstName?: string,
        lastName?: string,
        userName?: string,
        password?: string,
        email?: string
    }) {
        super(params);
        Object.assign(this, params);
    }

    public serialize(): Object {
        return Object.assign(super.serialize(), {
            firstName: this.firstName,
            lastName: this.lastName,
            userName: this.userName,
            password: this.password,
            email: this.email
        });
    }
}

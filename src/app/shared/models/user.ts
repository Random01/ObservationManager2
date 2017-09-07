export class User {

    firstName: string;

    lastName: string;

    login: string;

    constructor(params?: {
        firstName?: string,
        lastName?: string,
        login?: string
    }) {
        Object.assign(this, params);
    }
}

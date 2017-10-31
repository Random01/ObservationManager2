export class User {

    id: string;

    firstName: string;

    lastName: string;

    login: string;

    constructor(params?: {
        id?: string,
        firstName?: string,
        lastName?: string,
        login?: string
    }) {
        Object.assign(this, params);
    }
}

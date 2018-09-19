import { User } from '../models/user.model';

export class BaseComponent {

    currentUser: User;
    isLoading: Boolean = false;

    constructor() {
        this.currentUser = new User({
            id: 'aaaa-bbbb-cccc-dddd',
            firstName: 'Alexei',
            lastName: 'Matvienko'
        });
    }

    public startLoading() {
        this.isLoading = true;
    }

    public endLoading() {
        this.isLoading = false;
    }

}

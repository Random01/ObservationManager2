import { User } from '../models/user.model';

export class BaseComponent {

    currentUser: User;

    constructor() {
        this.currentUser = new User({
            id: 'aaaa-bbbb-cccc-dddd',
            firstName: 'Alexei',
            lastName: 'Matvienko'
        });
    }

}

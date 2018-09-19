import { Injectable } from '@angular/core';
import { UserService } from '../../users/shared/user.service';

@Injectable()
export class AuthenticationService {

    constructor(
        private userService: UserService
    ) {
    }

    signOut() {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('user');
    }

    signIn(userName: String, password: String) {
        return this.userService.authenticate(userName, password).then((result) => {
            localStorage.setItem('jwtToken', result.token);
            localStorage.setItem('user', result.user.userName);

            return result;
        });
    }

    set(item: any) {

    }

}

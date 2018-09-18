import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

    signOut() {
        localStorage.removeItem('jwtToken');
    }

}

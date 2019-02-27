import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(
        protected auth: AuthenticationService,
        protected router: Router) {
    }

    canActivate(): Observable<boolean> {
        return this.auth.isAuthenticated.pipe(
            map(authenticated => {
                if (authenticated) {
                    return true;
                }

                this.router.navigate(['/login']);
                return false;
            })
        );
    }

}

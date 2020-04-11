import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {

    constructor(
        protected auth: AuthenticationService,
        protected router: Router,
    ) {
    }

    public canActivate(): Observable<boolean> {
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

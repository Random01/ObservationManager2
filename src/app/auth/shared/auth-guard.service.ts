import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthenticationService } from './authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuardService  {

  constructor(
    private readonly authService: AuthenticationService,
    private readonly router: Router,
  ) { }

  public canActivate(): Observable<boolean> {
    return this.authService.isAuthenticated$.pipe(
      tap(authenticated => {
        if (!authenticated) {
          this.router.navigate(['/login']);
        }
      })
    );
  }

}

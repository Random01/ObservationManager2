import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

import { map } from 'rxjs/operators';

import { AuthenticationService } from './authentication.service';

export const AuthGuard: CanActivateFn = (_route: ActivatedRouteSnapshot, __state: RouterStateSnapshot) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);

  return authService.isAuthenticated$.pipe(map((authenticated) => authenticated || router.createUrlTree(['/login'])));
};

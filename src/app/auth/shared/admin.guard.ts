import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';

export const AdminGuard: CanActivateFn = (
  _route: ActivatedRouteSnapshot,
  __state: RouterStateSnapshot,
) => false;

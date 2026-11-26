import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, GuardResult, provideRouter, Router, UrlTree } from '@angular/router';
import { firstValueFrom, Observable, of } from 'rxjs';

import { AuthGuard } from './auth.guard';
import { AuthenticationService } from './authentication.service';

describe('AuthGuard', () => {
  function resultFor(isAuthenticated: boolean) {
    TestBed.configureTestingModule({
      providers: [provideRouter([]), { provide: AuthenticationService, useValue: { isAuthenticated$: of(isAuthenticated) } }],
    });
    const router = TestBed.inject(Router);
    return firstValueFrom(TestBed.runInInjectionContext(() => AuthGuard(new ActivatedRouteSnapshot(), router.routerState.snapshot)) as Observable<GuardResult>);
  }

  it('allows the authenticated observer to continue', async () => {
    expect(await resultFor(true)).toBeTrue();
  });

  it('redirects an unauthenticated visitor to login', async () => {
    const result = await resultFor(false);
    expect(result instanceof UrlTree).toBeTrue();
    expect(result.toString()).toBe('/login');
  });
});

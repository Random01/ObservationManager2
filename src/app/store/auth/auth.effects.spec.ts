import { TestBed } from '@angular/core/testing';

import { ReplaySubject, of } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';

import { AuthenticationService } from 'app/auth/shared';

import { AuthEffects } from './auth.effects';
import * as AuthApiActions from './auth.actions';
import { TypedAction } from '@ngrx/store/src/models';
import { User } from 'app/shared/models/user.model';

describe('AuthEffects', () => {

  let authEffects: AuthEffects;
  let actions$: ReplaySubject<TypedAction<string>>;
  let authService: AuthenticationService;

  beforeEach(() => {
    actions$ = new ReplaySubject(1);

    TestBed.configureTestingModule({
      providers: [
        AuthEffects,

        provideMockActions(() => actions$),
        { provide: AuthenticationService, useValue: {} },
      ],
    });

    authEffects = TestBed.inject(AuthEffects);
    authService = TestBed.inject(AuthenticationService);
  });

  describe('login$ effect', () => {

    it('should login', done => {
      const user = new User();

      authService.logIn = jasmine.createSpy('logIn')
        .and.returnValue(of(user));

      authEffects.login$.subscribe(result => {
        expect(result).toEqual(AuthApiActions.loginSuccess({ user }));
        done();
      });

      actions$.next(AuthApiActions.login({
        credentials: {
          email: 'mail',
          password: 'pass',
        }
      }));
    });

  });

});

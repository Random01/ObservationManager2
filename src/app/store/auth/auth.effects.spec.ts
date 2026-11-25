import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { firstValueFrom, ReplaySubject, of, throwError } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';

import { AuthenticationService } from 'app/auth/shared';

import { AuthEffects } from './auth.effects';
import * as AuthApiActions from './auth.actions';
import { Action } from '@ngrx/store';

import { User } from 'app/shared/models/user.model';
import { LoggingService } from 'app/shared/services/logging.service';
import { MessageService } from 'app/shared/services/message.service';

describe('AuthEffects', () => {
  let authEffects: AuthEffects;
  let actions$: ReplaySubject<Action<string>>;
  let authService: jasmine.SpyObj<AuthenticationService>;
  let logging: jasmine.SpyObj<LoggingService>;
  let messages: jasmine.SpyObj<MessageService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    actions$ = new ReplaySubject(1);
    authService = jasmine.createSpyObj<AuthenticationService>('AuthenticationService', ['logIn', 'populate', 'logOut']);
    logging = jasmine.createSpyObj<LoggingService>('LoggingService', ['error']);
    messages = jasmine.createSpyObj<MessageService>('MessageService', ['error']);
    router = jasmine.createSpyObj<Router>('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        AuthEffects,
        provideMockActions(() => actions$),
        { provide: AuthenticationService, useValue: authService },
        { provide: LoggingService, useValue: logging },
        { provide: MessageService, useValue: messages },
        { provide: Router, useValue: router },
      ],
    });

    authEffects = TestBed.inject(AuthEffects);
  });

  describe('login$ effect', () => {
    it('should login', (done) => {
      const user = new User();

      authService.logIn.and.returnValue(of(user));

      authEffects.login$.subscribe((result) => {
        expect(result).toEqual(AuthApiActions.loginSuccess({ user }));
        done();
      });

      actions$.next(
        AuthApiActions.login({
          credentials: {
            email: 'mail',
            password: 'pass',
          },
        }),
      );
    });
  });

  it('dispatches a login failure and reports the error to the observer', async () => {
    const error = new Error('Login rejected');
    authService.logIn.and.returnValue(throwError(() => error));
    const result = firstValueFrom(authEffects.login$);
    actions$.next(AuthApiActions.login({ credentials: { email: 'observer@example.test', password: 'test-password' } }));
    const failure = AuthApiActions.loginFailure({ error });
    expect(await result).toEqual(failure);

    const notification = firstValueFrom(authEffects.loginFailure$);
    actions$.next(failure);
    await notification;
    expect(logging.error).toHaveBeenCalledOnceWith(error);
    expect(messages.error).toHaveBeenCalledOnceWith('Unable to login. Service Unavailable.');
  });

  it('reports both successful and failed session restoration', async () => {
    const user = new User({ id: 'user-1' });
    const error = new Error('Session expired');
    authService.populate.and.returnValues(
      of(user),
      throwError(() => error),
    );

    actions$.next(AuthApiActions.populate());
    expect(await firstValueFrom(authEffects.populate$)).toEqual(AuthApiActions.populateSuccess({ user }));
    expect(await firstValueFrom(authEffects.populate$)).toEqual(AuthApiActions.populateFailure({ error }));
  });

  it('navigates home after successful login and logout', async () => {
    actions$.next(AuthApiActions.loginSuccess({ user: new User() }));
    await firstValueFrom(authEffects.loginSuccess$);
    expect(router.navigate).toHaveBeenCalledOnceWith(['/']);

    authService.logOut.and.returnValue(of(undefined));
    actions$.next(AuthApiActions.logout());
    expect(await firstValueFrom(authEffects.logout$)).toEqual(AuthApiActions.logoutSuccess());
    actions$.next(AuthApiActions.logoutSuccess());
    await firstValueFrom(authEffects.logoutSuccess$);
    expect(router.navigate.calls.allArgs()).toEqual([[['/']], [['/']]]);
  });

  it('dispatches a failure if logging out fails', async () => {
    const error = new Error('Logout failed');
    authService.logOut.and.returnValue(throwError(() => error));
    actions$.next(AuthApiActions.logout());
    expect(await firstValueFrom(authEffects.logout$)).toEqual(AuthApiActions.logoutFailure({ error }));
  });
});

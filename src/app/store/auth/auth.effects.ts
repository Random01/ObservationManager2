import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, ofType, createEffect } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

import { MessageService } from 'app/shared/services/message.service';
import { LoggingService } from 'app/shared/services/logging.service';

import { AuthenticationService } from '../../auth/shared';
import * as AuthApiActions from './auth.actions';
import { BaseEffects } from '../common/base.effects';

@Injectable()
export class AuthEffects extends BaseEffects {

  public readonly login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthApiActions.login),
      exhaustMap(action =>
        this.authService.logIn(action.credentials).pipe(
          map(user => AuthApiActions.loginSuccess({ user })),
          catchError(error => of(AuthApiActions.loginFailure({ error }))),
        )
      )
    )
  );

  public readonly loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthApiActions.loginSuccess),
      tap(() => this.router.navigate(['/'])),
    ),
    { dispatch: false }
  );

  public readonly loginFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthApiActions.loginFailure),
      tap(({ error }) => this.handleError(error, 'Unable to login. Service Unavailable.')),
    ),
    { dispatch: false }
  );

  public readonly populate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthApiActions.populate),
      exhaustMap(() =>
        this.authService.populate().pipe(
          map(user => AuthApiActions.populateSuccess({ user })),
          catchError(error => of(AuthApiActions.populateFailure({ error })))
        )
      )
    )
  );

  public readonly logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthApiActions.logout),
      exhaustMap(() =>
        this.authService.logOut().pipe(
          map(() => AuthApiActions.logoutSuccess()),
          catchError(error => of(AuthApiActions.logoutFailure({ error }))),
        )
      ),
    )
  );

  public readonly logoutSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthApiActions.logoutSuccess),
      tap(() => this.router.navigate(['/'])),
    ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly authService: AuthenticationService,
    private readonly router: Router,
    messageService: MessageService,
    loggingService: LoggingService,
  ) {
    super(messageService, loggingService);
  }

}

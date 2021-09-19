import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

import { UserService } from 'app/users/shared';
import { MessageService } from 'app/shared/services/message.service';
import { LoggingService } from 'app/shared/services/logging.service';

import * as RegisterActions from './register.actions';
import { BaseEffects } from '../common/base.effects';

@Injectable()
export class RegisterEffects extends BaseEffects {

  public readonly register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegisterActions.register),
      exhaustMap(action =>
        this.userService.register(action.user).pipe(
          map(() => RegisterActions.registerSuccess()),
          catchError(error => of(RegisterActions.registerFailure({ error }))),
        )
      )
    )
  );

  public readonly registerSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegisterActions.registerSuccess),
      tap(() => this.router.navigate(['/login'])),
    ),
    { dispatch: false }
  );

  public readonly registerFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegisterActions.registerFailure),
      tap(() => this.router.navigate(['/login'])),
    ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly router: Router,
    private readonly userService: UserService,
    messageService: MessageService,
    loggingService: LoggingService,
  ) {
    super(messageService, loggingService);
  }

}

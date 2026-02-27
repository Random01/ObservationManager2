import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

import { UserService } from 'app/users/shared';

import * as RegisterActions from './register.actions';
import { BaseEffects } from '../common/base.effects';

@Injectable()
export class RegisterEffects extends BaseEffects {
  
  private readonly actions$ = inject(Actions);
  private readonly router = inject(Router);
  private readonly userService = inject(UserService);
  
  public readonly register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegisterActions.register),
      exhaustMap((action) =>
        this.userService.register(action.user).pipe(
          map(() => RegisterActions.registerSuccess()),
          catchError((error) => of(RegisterActions.registerFailure({ error }))),
        ),
      ),
    ),
  );

  public readonly registerSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RegisterActions.registerSuccess),
        tap(() => this.router.navigate(['/login'])),
      ),
    { dispatch: false },
  );

  public readonly registerFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RegisterActions.registerFailure),
        tap(() => this.router.navigate(['/login'])),
      ),
    { dispatch: false },
  );
}

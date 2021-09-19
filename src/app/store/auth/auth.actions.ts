import { createAction, props } from '@ngrx/store';

import { Credentials } from 'app/auth/shared/credentials.interface';
import { User } from 'app/shared/models/user.model';

export const login = createAction(
  '[Auth] Login',
  props<{ credentials: Credentials }>(),
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: User }>(),
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: Error }>(),
);

export const populate = createAction(
  '[Auth] Populate',
);

export const populateSuccess = createAction(
  '[Auth] Populate Success',
  props<{ user: User }>(),
);

export const populateFailure = createAction(
  '[Auth] Populate Failure',
  props<{ error: Error }>(),
);

export const logout = createAction(
  '[Auth] Logout',
);

export const logoutSuccess = createAction(
  '[Auth] Logout Success',
);

export const logoutFailure = createAction(
  '[Auth] Logout Failure',
  props<{ error: Error }>(),
);

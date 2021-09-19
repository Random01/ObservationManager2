import { createAction, props } from '@ngrx/store';

import { User } from '../../shared/models/user.model';

export const register = createAction(
  '[Register] Register',
  props<{ user: User }>(),
);

export const registerSuccess = createAction(
  '[Register] Register Success',
);

export const registerFailure = createAction(
  '[Register] Register Failure',
  props<{ error: Error }>(),
);

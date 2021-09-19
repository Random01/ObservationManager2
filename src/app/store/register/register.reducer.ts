import { createReducer, on } from '@ngrx/store';

import { RegisterState } from './register-state.interface';
import * as RegisterActions from './register.actions';

export const initialState: RegisterState = {
  isWorking: false,
  error: null,
};

export const registerReducer = createReducer(
  initialState,

  on(RegisterActions.register, state => ({
    ...state,
    isWorking: true,
    error: null,
  })),

  on(RegisterActions.registerSuccess, state => ({
    ...state,
    isWorking: false,
    error: null,
  })),

  on(RegisterActions.registerFailure, (state, { error }) => ({
    ...state,
    isWorking: false,
    error,
  })),

);

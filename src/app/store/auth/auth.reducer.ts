import { createReducer, on } from '@ngrx/store';

import { User } from 'app/shared/models/user.model';

import { AuthState } from './auth-state.interface';
import * as AuthApiActions from './auth.actions';

export const initialState: AuthState = {
  user: User.UnauthorizedUser,
  isAuthenticated: false,
  isWorking: false,
  error: null,
};

export const authReducer = createReducer(
  initialState,

  on(AuthApiActions.login, state => ({
    ...state,
    isWorking: true,
  })),

  on(AuthApiActions.loginSuccess, (state, { user }) => ({
    ...state,
    user,
    isAuthenticated: true,
    error: null,
    isWorking: false,
  })),

  on(AuthApiActions.loginFailure, (state, { error }) => ({
    ...state,
    error,
    isAuthenticated: false,
    user: User.UnauthorizedUser,
    isWorking: false,
  })),

  on(AuthApiActions.populateSuccess, (state, { user }) => ({
    ...state,
    user,
    isAuthenticated: true,
    error: null,
    isWorking: false,
  })),

  on(AuthApiActions.populateFailure, (state, { error }) => ({
    ...state,
    error,
    isAuthenticated: false,
    user: User.UnauthorizedUser,
    isWorking: false,
  })),

  on(AuthApiActions.logoutSuccess, state => ({
    ...state,
    ...initialState,
  })),
);

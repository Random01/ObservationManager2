import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../environments/environment';

import { AppState } from './app-state.interface';
import { authReducer } from './auth';
import { navigationMenuReducer } from './navigation-menu';
import { registerReducer } from './register';

export * from './app-state.interface';

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  navigationMenu: navigationMenuReducer,
  register: registerReducer,
};

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = environment.production ? [] : [debug];

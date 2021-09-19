import { createFeatureSelector } from '@ngrx/store';

import { AuthState } from './auth-state.interface';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

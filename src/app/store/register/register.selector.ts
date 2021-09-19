import { createFeatureSelector } from '@ngrx/store';

import { RegisterState } from './register-state.interface';

export const selectRegisterState = createFeatureSelector<RegisterState>('register');

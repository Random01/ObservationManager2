import { AuthState } from './auth';
import { NavigationMenuState } from './navigation-menu';
import { RegisterState } from './register';

export interface AppState {
  auth: AuthState;
  navigationMenu: NavigationMenuState;
  register: RegisterState;
}

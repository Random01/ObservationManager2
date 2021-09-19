import { User } from 'app/shared/models/user.model';

export interface AuthState {
  user: User;
  isAuthenticated: boolean;
  isWorking: boolean;
  error: Error | null;
}

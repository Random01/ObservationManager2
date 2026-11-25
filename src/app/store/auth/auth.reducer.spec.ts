import { User } from '../../shared/models/user.model';
import * as AuthActions from './auth.actions';
import { authReducer, initialState } from './auth.reducer';

describe('authReducer', () => {
  const user = new User({ id: 'observer-1' });
  const credentials = { email: 'observer@example.test', password: 'test-password' };

  it('marks login as pending and resets the state on logout after successful login', () => {
    const pending = authReducer(initialState, AuthActions.login({ credentials }));
    expect(pending.isWorking).toBeTrue();

    const authenticated = authReducer(pending, AuthActions.loginSuccess({ user }));
    expect(authenticated).toEqual({ user, isAuthenticated: true, isWorking: false, error: null });
    expect(authReducer(authenticated, AuthActions.logoutSuccess())).toEqual(initialState);
  });

  it('clears a previous user and records an error if login fails', () => {
    const pending = { ...initialState, user, isAuthenticated: true, isWorking: true };
    const error = new Error('Invalid credentials');

    expect(authReducer(pending, AuthActions.loginFailure({ error }))).toEqual({ ...initialState, error });
  });

  it('restores a user and clears the previous error when population succeeds', () => {
    const failed = authReducer(initialState, AuthActions.populateFailure({ error: new Error('Expired session') }));
    expect(failed.error?.message).toBe('Expired session');
    expect(failed.isAuthenticated).toBeFalse();

    expect(authReducer(failed, AuthActions.populateSuccess({ user }))).toEqual({
      user,
      isAuthenticated: true,
      isWorking: false,
      error: null,
    });
  });
});

import { User } from '../../shared/models/user.model';
import * as RegisterActions from './register.actions';
import { initialState, registerReducer } from './register.reducer';

describe('registerReducer', () => {
  it('records a failed submission and clears the error when registration is retried', () => {
    const submit = RegisterActions.register({ user: new User() });
    const pending = registerReducer(initialState, submit);
    expect(pending).toEqual({ isWorking: true, error: null });

    const error = new Error('Email is already registered');
    const failed = registerReducer(pending, RegisterActions.registerFailure({ error }));
    expect(failed).toEqual({ isWorking: false, error });

    const retry = registerReducer(failed, submit);
    expect(retry).toEqual({ isWorking: true, error: null });
    expect(registerReducer(retry, RegisterActions.registerSuccess())).toEqual(initialState);
  });
});

import { TestBed } from '@angular/core/testing';
import { firstValueFrom, of, throwError } from 'rxjs';

import { User } from '../../shared/models/user.model';
import { LoggingService } from '../../shared/services/logging.service';
import { SignInResultPayload } from '../../users/shared/sign-in-result-payload.model';
import { UserService } from '../../users/shared/user.service';
import { AuthenticationService } from './authentication.service';
import { JwtService } from './jwt.service';

describe('AuthenticationService', () => {
  const user = new User({ id: 'observer-1' });
  const signIn = new SignInResultPayload({ user, token: 'new-token' });
  let service: AuthenticationService;
  let users: jasmine.SpyObj<UserService>;
  let tokens: jasmine.SpyObj<JwtService>;
  let logging: jasmine.SpyObj<LoggingService>;

  beforeEach(() => {
    users = jasmine.createSpyObj<UserService>('UserService', ['authenticate', 'getUser']);
    tokens = jasmine.createSpyObj<JwtService>('JwtService', ['getToken', 'setToken', 'removeToken']);
    logging = jasmine.createSpyObj<LoggingService>('LoggingService', ['error']);

    TestBed.configureTestingModule({
      providers: [
        { provide: UserService, useValue: users },
        { provide: JwtService, useValue: tokens },
        { provide: LoggingService, useValue: logging },
      ],
    });
    service = TestBed.inject(AuthenticationService);
  });

  it('sets the current user and token after signing in and clears both on logout', async () => {
    const credentials = { email: 'observer@example.test', password: 'test-password' };
    users.authenticate.and.returnValue(of(signIn));

    expect(await firstValueFrom(service.logIn(credentials))).toBe(user);
    expect(users.authenticate).toHaveBeenCalledWith(credentials.email, credentials.password);
    expect(tokens.setToken).toHaveBeenCalledWith('new-token');
    expect(service.getCurrentUser()).toBe(user);
    expect(await firstValueFrom(service.isAuthenticated$)).toBeTrue();

    await firstValueFrom(service.logOut());
    expect(tokens.removeToken).toHaveBeenCalledTimes(1);
    expect(await firstValueFrom(service.currentUser$)).toBe(User.UnauthorizedUser);
    expect(await firstValueFrom(service.isAuthenticated$)).toBeFalse();
  });

  it('restores the user and refreshes the token when a stored token exists', async () => {
    tokens.getToken.and.returnValue('stored-token');
    users.getUser.and.returnValue(of(signIn));

    expect(await firstValueFrom(service.populate())).toBe(user);
    expect(users.getUser).toHaveBeenCalledTimes(1);
    expect(tokens.setToken).toHaveBeenCalledWith('new-token');
    expect(service.getCurrentUser()).toBe(user);
  });

  it('does not request a user when there is no stored token', async () => {
    tokens.getToken.and.returnValue(null);

    expect(await firstValueFrom(service.populate())).toBe(User.UnauthorizedUser);
    expect(users.getUser).not.toHaveBeenCalled();
    expect(await firstValueFrom(service.isAuthenticated$)).toBeFalse();
  });

  it('logs a failed restore and removes the stale token', async () => {
    const error = new Error('Session expired');
    tokens.getToken.and.returnValue('stale-token');
    users.getUser.and.returnValue(throwError(() => error));

    expect(await firstValueFrom(service.populate())).toBe(User.UnauthorizedUser);
    expect(logging.error).toHaveBeenCalledWith(error);
    expect(tokens.removeToken).toHaveBeenCalledTimes(1);
    expect(await firstValueFrom(service.isAuthenticated$)).toBeFalse();
  });
});

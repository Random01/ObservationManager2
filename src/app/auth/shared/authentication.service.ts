import { Injectable } from '@angular/core';

import { BehaviorSubject, from, Observable, of, ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map, tap } from 'rxjs/operators';

import { LoggingService } from '../../shared/services/logging.service';
import { User } from '../../shared/models/user.model';
import { SignInResultPayload } from '../../users/shared/sign-in-result-payload.model';
import { UserService } from '../../users/shared/user.service';
import { JwtService } from './jwt.service';
import { Credentials } from './credentials.interface';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  private readonly currentUserSubject = new BehaviorSubject<User>(User.UnauthorizedUser);
  public readonly currentUser$ = this.currentUserSubject.asObservable().pipe(
    distinctUntilChanged()
  );

  private readonly isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public readonly isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly loggingService: LoggingService,
  ) { }

  public logOut(): Observable<void> {
    this.jwtService.removeToken();
    this.currentUserSubject.next(User.UnauthorizedUser);
    this.isAuthenticatedSubject.next(false);

    return of(undefined);
  }

  public populate(): Observable<User> {
    return from(this.populateInternal());
  }

  public getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  public logIn({ email, password }: Credentials): Observable<User> {
    return this.userService.authenticate(email, password)
      .pipe(
        tap(result => this.setAut(result)),
        map(x => x.user),
      );
  }

  private async populateInternal(): Promise<User> {
    if (this.jwtService.getToken()) {
      try {
        const result = await this.userService.getUser();
        this.setAut(result);
        return result.user;
      } catch (ex) {
        this.loggingService.error(ex);
        this.logOut();

        return User.UnauthorizedUser;
      }
    } else {
      this.logOut();

      return User.UnauthorizedUser;
    }
  }

  private setAut({ token, user }: SignInResultPayload): void {
    this.jwtService.setToken(token);
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
  }

}

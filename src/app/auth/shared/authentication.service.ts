import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of, ReplaySubject } from 'rxjs';
import { catchError, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';

import { LoggingService } from '../../shared/services/logging.service';
import { User } from '../../shared/models/user.model';
import { SignInResultPayload } from '../../users/shared/sign-in-result-payload.model';
import { UserService } from '../../users/shared/user.service';
import { JwtService } from './jwt.service';
import { Credentials } from './credentials.interface';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private readonly currentUserSubject = new BehaviorSubject<User>(User.UnauthorizedUser);
  public readonly currentUser$ = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private readonly isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public readonly isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly loggingService: LoggingService,
  ) {}

  public logOut(): Observable<void> {
    this.jwtService.removeToken();
    this.currentUserSubject.next(User.UnauthorizedUser);
    this.isAuthenticatedSubject.next(false);

    return of(undefined);
  }

  public populate(): Observable<User> {
    return of(this.jwtService.getToken()).pipe(
      switchMap((token) => {
        if (token) {
          return this.userService.getUser().pipe(
            tap((result) => this.setAut(result)),
            map((result) => result.user),
            catchError((error) => {
              this.loggingService.error(error);
              return of(User.UnauthorizedUser);
            }),
          );
        } else {
          return of(User.UnauthorizedUser);
        }
      }),
      tap((user) => user === User.UnauthorizedUser && this.logOut()),
    );
  }

  public getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  public logIn({ email, password }: Credentials): Observable<User> {
    return this.userService.authenticate(email, password).pipe(
      tap((result) => this.setAut(result)),
      map((x) => x.user),
    );
  }

  private setAut({ token, user }: SignInResultPayload): void {
    this.jwtService.setToken(token);
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
  }
}

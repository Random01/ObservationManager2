import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../../shared/models/user.model';
import { StorageService } from '../../shared/services/storage.service';
import { SignInResultPayload } from './sign-in-result-payload.model';

@Injectable({ providedIn: 'root' })
export class UserService extends StorageService<User> {
  constructor() {
    super('/users', User);
  }

  public override deserialize(state: any): User {
    return new User(state);
  }

  public authenticate(userName: string, password: string): Observable<SignInResultPayload> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    const data = { user: { userName, password } };

    return this.http.post<{ user: any }>(this.getUrl() + '/login', data, httpOptions).pipe(
      map(
        ({ user }) =>
          new SignInResultPayload({
            token: user.token,
            user: new User({
              userName: user.userName,
              email: user.email,
            }),
          }),
      ),
    );
  }

  public getUser(): Observable<SignInResultPayload> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.getAuthorizationToken(),
      }),
    };

    return this.http.get<{ user: any }>(this.getUrl() + '/user', httpOptions).pipe(
      map(
        ({ user }) =>
          new SignInResultPayload({
            token: user.token,
            user: new User({
              userName: user.userName,
              email: user.email,
            }),
          }),
      ),
    );
  }

  public register(user: User): Observable<void> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.post<void>(this.getUrl() + '/', user, httpOptions);
  }
}

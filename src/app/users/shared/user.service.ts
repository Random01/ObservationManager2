import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../../shared/models/user.model';
import { StorageService } from '../../shared/services/storage.service';
import { SignInResultPayload } from './sign-in-result-payload.model';
import { JwtService } from '../../auth/shared/jwt.service';

@Injectable({ providedIn: 'root' })
export class UserService extends StorageService<User> {

  constructor(
    http: HttpClient,
    jwtService: JwtService,
  ) {
    super('/users', http, jwtService);
  }

  public override deserialize(state: any): User {
    return new User(state);
  }

  public override createNew(): User {
    return new User();
  }

  public authenticate(userName: String, password: String): Observable<SignInResultPayload> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    const data = { user: { userName, password } };

    return this.http.post<any>(this.getUrl() + '/login', data, httpOptions).pipe(
      map(({ user }) => new SignInResultPayload({
        token: user.token,
        user: new User({
          userName: user.userName,
          email: user.email,
        }),
      })),
    );
  }

  public async getUser(): Promise<SignInResultPayload> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.getAuthorizationToken(),
      })
    };

    const { user } = await this.http.get<any>(this.getUrl() + '/user', httpOptions).toPromise();
    return new SignInResultPayload({
      token: user.token,
      user: new User({
        userName: user.userName,
        email: user.email,
      })
    });
  }

  public register(user: User): Observable<void> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return this.http.post<any>(this.getUrl() + '/', user, httpOptions);
  }

}

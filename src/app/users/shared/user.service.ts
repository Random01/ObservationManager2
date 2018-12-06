import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../../shared/models/user.model';

import { StorageService } from '../../shared/services/storage.service';
import { SignInResultPayload } from './signIn-result-payload.model';

@Injectable()
export class UserService extends StorageService<User> {

    constructor(protected http: HttpClient) {
        super(http, '/users');
    }

    deserialize(state: any): User {
        return new User(state);
    }

    createNew(): User {
        return new User();
    }

    authenticate(userName: String, password: String): Promise<SignInResultPayload> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        return new Promise<SignInResultPayload>((success) => {
            return this.http.post<any>(this.getUrl() + '/login', { user: { userName: userName, password: password } }, httpOptions)
                .subscribe(({ user }) => success(new SignInResultPayload({
                    token: user.token,
                    user: new User({
                        userName: user.userName,
                        email: user.email
                    })
                })));
        });
    }

    getUser(): Promise<SignInResultPayload> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.getAuthorizationToken()
            })
        };

        return new Promise<SignInResultPayload>((success) => {
            return this.http.get<any>(this.getUrl() + '/user', httpOptions)
                .subscribe(({ user }) => {
                    success(new SignInResultPayload({
                        token: user.token,
                        user: new User({
                            userName: user.userName,
                            email: user.email
                        })
                    }));
                });
        });
    }

    register(user: User): Promise<User> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        return new Promise<User>((success) => {
            return this.http.post<any>(this.getUrl() + '/', user, httpOptions)
                .subscribe(() => success(new User()));
        });
    }

}

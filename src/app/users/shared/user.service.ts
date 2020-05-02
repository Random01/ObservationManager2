import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../../shared/models/user.model';

import { StorageService } from '../../shared/services/storage.service';
import { SignInResultPayload } from './signIn-result-payload.model';
import { JwtService } from '../../auth/shared/jwt.service';

@Injectable({ providedIn: 'root' })
export class UserService extends StorageService<User> {

    constructor(
        protected http: HttpClient,
        protected jwtService: JwtService,
    ) {
        super('/users', http, jwtService);
    }

    deserialize(state: any): User {
        return new User(state);
    }

    createNew(): User {
        return new User();
    }

    public async authenticate(userName: String, password: String): Promise<SignInResultPayload> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };
        const data = { user: { userName: userName, password: password } };

        const { user } = await this.http.post<any>(this.getUrl() + '/login', data, httpOptions).toPromise();
        return new SignInResultPayload({
            token: user.token,
            user: new User({
                userName: user.userName,
                email: user.email,
            }),
        });
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

    public register(user: User): Promise<User> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };

        return this.http
            .post<any>(this.getUrl() + '/', user, httpOptions)
            .toPromise();
    }

}

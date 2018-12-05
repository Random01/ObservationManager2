import { Injectable } from '@angular/core';
import { UserService } from '../../users/shared/user.service';
import { JwtService } from './jwt.service';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { distinctUntilChanged } from 'rxjs/operators';

import { User } from '../../shared/models/user.model';
import { SignInResultPayload } from '../../users/shared/signIn-result-payload.model';

@Injectable()
export class AuthenticationService {

    private currentUserSubject = new BehaviorSubject<User>({} as User);
    public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

    private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
    public isAuthenticated = this.isAuthenticatedSubject.asObservable();

    public num: number;

    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {
    }

    signOut() {
        this.jwtService.removeToken();
        this.currentUserSubject.next({} as User);
        this.isAuthenticatedSubject.next(false);
    }

    setAut(result: SignInResultPayload): void {
        this.jwtService.setToken(result.token);
        this.currentUserSubject.next(result.user);
        this.isAuthenticatedSubject.next(true);
    }

    populate() {
        if (this.jwtService.getToken()) {
            this.userService.getUser()
                .then(
                    (result) => this.setAut(result),
                    () => this.signOut()
                );
        } else {
            this.signOut();
        }
    }

    getCurrentUser(): User {
        return this.currentUserSubject.value;
    }

    async signIn(userName: String, password: String) {
        const result = await this.userService.authenticate(userName, password);
        this.setAut(result);
        return result;
    }

}

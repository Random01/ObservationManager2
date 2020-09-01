import { Injectable } from '@angular/core';

import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

import { User } from '../../shared/models/user.model';
import { SignInResultPayload } from '../../users/shared/signIn-result-payload.model';
import { UserService } from '../../users/shared/user.service';
import { JwtService } from './jwt.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private currentUserSubject = new BehaviorSubject<User>({} as User);
    public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

    private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
    public isAuthenticated = this.isAuthenticatedSubject.asObservable();

    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) {
    }

    public signOut(): Promise<void> {
        this.jwtService.removeToken();
        this.currentUserSubject.next({} as User);
        this.isAuthenticatedSubject.next(false);

        return Promise.resolve();
    }

    public setAut(result: SignInResultPayload): void {
        this.jwtService.setToken(result.token);
        this.currentUserSubject.next(result.user);
        this.isAuthenticatedSubject.next(true);
    }

    public async populate() {
        if (this.jwtService.getToken()) {
            try {
                const result = await this.userService.getUser();
                this.setAut(result);
            } catch (ex) {
                this.signOut();
            }
        } else {
            this.signOut();
        }
    }

    public getCurrentUser(): User {
        return this.currentUserSubject.value;
    }

    public async signIn(userName: String, password: String) {
        const result = await this.userService.authenticate(userName, password);
        this.setAut(result);
        return result;
    }

    public isAuth(): boolean {
        return this.jwtService.isTokenExpired();
    }
}

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class JwtService {

    setToken(token: string): void {
        localStorage.setItem('jwtToken', token);
    }

    removeToken(): void {
        localStorage.removeItem('jwtToken');
    }

    getToken(): string {
        return localStorage.getItem('jwtToken');
    }

    isTokenExpired(): boolean {
        return true;
    }

}

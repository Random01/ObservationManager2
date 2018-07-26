import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

    constructor(
        private http: HttpClient) {
    }

    login(email: string, password: string) {
        return this.http.post<void>('/api/login', { email, password });
    }
}

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class JwtService {
  public setToken(token: string): void {
    localStorage.setItem('jwtToken', token);
  }

  public removeToken(): void {
    localStorage.removeItem('jwtToken');
  }

  public getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }
}

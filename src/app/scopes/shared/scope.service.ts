import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Scope } from './../../shared/models/equipment/scope.model';

@Injectable()
export class ScopeService {

    private scopesUrl = 'http://localhost:3001/scopes';

    constructor(private http: HttpClient) {
    }

    getScopes(): Promise<Scope[]> {
        return new Promise<Scope[]>((success, fail) => {
            this.http.get<Scope[]>(this.scopesUrl).subscribe(x => {
                success(x);
            });
        });
    }

    addScope(scope: Scope): Promise<string> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        return new Promise<string>((success, fail) => {
            return this.http.post<Scope>(this.scopesUrl, scope, httpOptions).subscribe(x => {
                success('');
            });
        });
    }

    getScope(id: string): Promise<Scope> {
        return Promise.resolve(null);
    }
}

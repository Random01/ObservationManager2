import { Injectable } from '@angular/core';
import { Scope } from './../../shared/models/scope.model';

@Injectable()
export class ScopeService {

    scopes: Scope[] = [
        new Scope({
            id: '1',
            model: 'SW254/1200',
            aperture: 254,
            focalLength: 1200}),
        new Scope({
            id: '2',
            model: 'DS90/500',
            aperture: 90,
            focalLength: 500
        })
    ];

    getScopes(): Promise<Scope[]> {
        return Promise.resolve(this.scopes);
    }

    addScope(scope: Scope): Promise<string>{
        this.scopes.push(scope);
        return Promise.resolve('1');
    }
}
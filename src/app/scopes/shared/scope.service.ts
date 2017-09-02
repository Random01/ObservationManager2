import { Injectable } from '@angular/core';

import { Scope } from './../../shared/models/equipment/scope.model';
import { SCOPES } from './mock-scopes';

@Injectable()
export class ScopeService {

    getScopes(): Promise<Scope[]> {
        return Promise.resolve(SCOPES);
    }

    addScope(scope: Scope): Promise<string>{
        return Promise.resolve('1');
    }
}
import { Injectable } from '@angular/core';

import { Scope } from './../models/scope.model';

@Injectable()
export class ScopeService {

    getScopes(): Promise<Scope[]> {
        return Promise.resolve([
            new Scope({ id: '1' }),
            new Scope({ id: '2' })
        ]);
    }
}
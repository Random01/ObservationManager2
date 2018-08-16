import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Scope } from '../../shared/models/equipment/scope.model';
import { StorageService } from '../../shared/services/storage.service';

@Injectable()
export class ScopeService extends StorageService<Scope> {

    constructor(protected http: HttpClient) {
        super(http, '/scopes');
    }

    createNew(params?: any): Scope {
        return new Scope(params);
    }

}

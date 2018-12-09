import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Scope } from '../../shared/models/equipment/scope.model';
import { StorageService } from '../../shared/services/storage.service';
import { JwtService } from '../../auth/shared/jwt.service';

@Injectable()
export class ScopeService extends StorageService<Scope> {

    constructor(
        protected http: HttpClient,
        protected jwtService: JwtService) {
        super('/scopes', http, jwtService);
    }

    createNew(params?: any): Scope {
        return new Scope(params);
    }

}

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Filter } from '../../shared/models/equipment/filter.model';
import { StorageService } from '../../shared/services/storage.service';
import { JwtService } from '../../auth/shared/jwt.service';

@Injectable()
export class FilterService extends StorageService<Filter> {

    constructor(
        protected http: HttpClient,
        protected jwtService: JwtService) {
        super('/filters', http, jwtService);
    }

    createNew(params?: any): Filter {
        return new Filter(params);
    }
}

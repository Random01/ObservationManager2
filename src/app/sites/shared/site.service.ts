import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Site } from '../../shared/models/site.model';
import { StorageService } from '../../shared/services/storage.service';
import { JwtService } from '../../auth/shared/jwt.service';

@Injectable()
export class SiteService extends StorageService<Site> {

    constructor(
        protected http: HttpClient,
        protected jwtService: JwtService) {
        super('/sites', http, jwtService);
    }

    createNew(params: any): Site {
        return new Site(params);
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Site } from '../../shared/models/site.model';
import { StorageService } from '../../shared/services/storage.service';
import { JwtService } from '../../auth/shared/jwt.service';

@Injectable({ providedIn: 'root' })
export class SiteService extends StorageService<Site> {

    constructor(
        http: HttpClient,
        jwtService: JwtService,
    ) {
        super('/sites', http, jwtService);
    }

    public createNew(params: any): Site {
        return new Site(params);
    }
}

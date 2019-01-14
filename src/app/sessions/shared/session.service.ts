import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Session } from '../../shared/models/models';
import { StorageService } from '../../shared/services/storage.service';

import { SiteService } from '../../sites/shared/site.service';
import { JwtService } from '../../auth/shared/jwt.service';

@Injectable()
export class SessionService extends StorageService<Session> {

    constructor(
        protected http: HttpClient,
        protected jwtService: JwtService,
        protected siteService: SiteService) {
        super('/sessions', http, jwtService);
    }

    createNew(params?: any): Session {
        return new Session(params);
    }

}

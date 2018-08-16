import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Session } from '../../shared/models/models';
import { StorageService } from '../../shared/services/storage.service';

import { Site } from '../../shared/models/site.model';
import { SiteService } from '../../sites/shared/site.service';

@Injectable()
export class SessionService extends StorageService<Session> {

    constructor(
        protected http: HttpClient,
        protected siteService: SiteService) {
        super(http, '/sessions');
    }

    deserialize(state: any): Session {
        const session = super.deserialize(state);

        session.site = this.siteService.deserialize(state.site || {});

        return session;
    }

    createNew(params?: any): Session {
        return new Session(Object.assign({}, {
            site: new Site()
        }, params));
    }
}

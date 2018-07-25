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
        state.id = state._id;
        delete state._id;

        const session = new Session(state);

        session.site = this.siteService.deserialize(state.site || {});

        return session;
    }

    createNew(): Session {
        return new Session({
            site: new Site()
        });
    }
}

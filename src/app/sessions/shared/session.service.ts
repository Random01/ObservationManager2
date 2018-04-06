import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Session } from '../../shared/models/models';
import { StorageService } from './../../shared/services/storage.service';
import { Site } from '../../shared/models/site.model';

@Injectable()
export class SessionService extends StorageService<Session> {
    constructor(protected http: HttpClient) {
        super(http, '/sessions');
    }

    deserialize(state: any) {
        const session = new Session(state);

        if (state != null && state.site != null) {
            session.site = new Site({
                id: state.site
            });
        }

        return session;
    }
}

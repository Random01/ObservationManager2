import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Session } from '../../shared/models/models';
import { StorageService } from './../../shared/services/storage.service';

@Injectable()
export class SessionService extends StorageService<Session> {
    constructor(protected http: HttpClient) {
        super(http, '/sessions');
    }

    deserialize(state: any) {
        return new Session(state);
    }
}

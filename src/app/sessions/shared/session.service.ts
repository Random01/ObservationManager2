import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Session } from '../../shared/models/models';
import { StorageService } from './../../shared/services/storage.service';
import { SESSIONS } from './mock-sessions';
import * as _ from 'lodash';

@Injectable()
export class SessionService extends StorageService<Session> {
    constructor(protected http: HttpClient) {
        super(http, '/sessions');
    }
}

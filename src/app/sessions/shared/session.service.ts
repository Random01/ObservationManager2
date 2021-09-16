import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Session } from '../../shared/models/models';
import { StorageService } from '../../shared/services/storage.service';
import { JwtService } from '../../auth/shared/jwt.service';

@Injectable({ providedIn: 'root' })
export class SessionService extends StorageService<Session> {

    constructor(
        http: HttpClient,
        jwtService: JwtService,
    ) {
        super('/sessions', http, jwtService);
    }

    createNew(params?: any): Session {
        return new Session(params);
    }

}

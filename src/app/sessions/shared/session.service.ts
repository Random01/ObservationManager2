import { Injectable } from '@angular/core';

import { Session } from '../../shared/models/models';
import { StorageService } from './../../shared/services/storage.service';
import { SESSIONS } from './mock-sessions';
import * as _ from 'lodash';

@Injectable()
export class SessionService implements StorageService<Session> {

    sessions: Session[];

    constructor(){
        this.sessions = [...SESSIONS];
    }

    getRecent(): Promise<Session[]> {
        return Promise.resolve([...this.sessions]);
    }

    add(newSession: Session): Promise<String> {
        this.sessions.push(newSession);
        return Promise.resolve(String(this.sessions.length));
    }

    getById(sessionId: String): Promise<Session> {
        let session = _.find(this.sessions, s=>s.id=== sessionId);
        return Promise.resolve(session);
    }

    update(session: Session): Promise<String> {
        return Promise.resolve('');
    }

}
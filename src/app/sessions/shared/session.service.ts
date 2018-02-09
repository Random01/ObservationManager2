import { Injectable } from '@angular/core';

import { Session } from '../../shared/models/models';
import { StorageService } from './../../shared/services/storage.service';
import { SESSIONS } from './mock-sessions';

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
        return Promise.resolve('aaaa');
    }

    getById(sessionId: String): Promise<Session> {
        return Promise.resolve(new Session());
    }

}
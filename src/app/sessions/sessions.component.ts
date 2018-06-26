import { Component, Input, OnInit } from '@angular/core';

import { NgForOf } from '@angular/common';

import { Session } from '../shared/models/session.model';
import { SessionService } from './shared/session.service';

@Component({
    selector: 'om-sessions',
    templateUrl: './sessions.component.html',
    styleUrls: ['./sessions.component.css'],
    providers: [ SessionService ]
})

export class SessionsComponent implements OnInit {

    sessions: Session[];

    constructor(private sessionService: SessionService) {
    }

    getRecent(): void {
        this.sessionService
            .getRecent()
            .then(recentSessions => this.sessions = recentSessions);
    }

    ngOnInit(): void {
        this.getRecent();
    }
}

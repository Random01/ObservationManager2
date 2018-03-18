import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Session } from './../../shared/models/session.model';
import { SessionComponent } from './../session/session.component';
import { SessionService } from '../shared/session.service';

@Component({
    selector: 'om-session-details',
    templateUrl: './session-details.component.html',
    styleUrls: ['./session-details.component.css'],
    providers: [SessionService]
})

export class SessionDetailsComponent implements OnInit {

    session: Session;
    isLoading: Boolean;
    editMode: Boolean;

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private sessionService: SessionService
    ) {

    }

    startLoading(): void {
        this.isLoading = true;
    }

    endLoading(): void {
        this.isLoading = false;
    }

    create(): void {
        this.startLoading();
        this.sessionService.add(this.session).then(() => {
            this.endLoading();
        });
    }

    update(): void {
        this.startLoading();
        this.sessionService.update(this.session).then(() => {
            this.endLoading();
        });
    }

    loadSession(): void {
        const sessionId = this.route.snapshot.paramMap.get('id');
        this.editMode = !!sessionId;
        if (sessionId) {
            this.startLoading();
            this.sessionService.getById(sessionId).then(session => {
                this.session = session;
                this.endLoading();
            });
        } else {
            this.session = new Session();
        }
    }

    ngOnInit(): void {
        this.loadSession();
    }

}

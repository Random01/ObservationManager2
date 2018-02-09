import { Component, Input, OnInit } from '@angular/core';

import { Session } from './../../shared/models/session.model';
import { SessionComponent } from './../session/session.component';

@Component({
    selector: 'om-session-details',
    templateUrl: './session-details.component.html',
    styleUrls: [ './session-details.component.css' ]
})

export class SessionDetailsComponent implements OnInit {

    session: Session;

    ngOnInit(): void {
        this.session = new Session();
    }
}
import { Component } from '@angular/core';

import { Session } from '../../shared/models/session.model';
import { SessionService } from '../shared/session.service';
import { EntityListComponent } from '../../shared/components/entity-list.component';

@Component({
    selector: 'om-sessions',
    templateUrl: './sessions.component.html',
    styleUrls: ['./sessions.component.css']
})

export class SessionsComponent extends EntityListComponent<Session> {

    displayedColumns: string[] = [
        'begin',
        'site',
        'weather',
        'actions'
    ];

    constructor(private sessionService: SessionService) {
        super(sessionService);
    }

}

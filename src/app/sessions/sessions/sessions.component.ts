import { Component } from '@angular/core';

import { Session } from '../../shared/models/session.model';
import { SessionService } from '../shared/session.service';
import { EntityListComponent } from '../../shared/components/entity-list.component';
import { SortOrder } from '../../shared/models/sort-order.model';

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

    sortDirection = SortOrder.Asc;
    sortField = 'begin';

    constructor(private sessionService: SessionService) {
        super(sessionService);
    }

}

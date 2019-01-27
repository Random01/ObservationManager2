import { Component } from '@angular/core';

import { Session } from '../../shared/models/session.model';
import { SessionService } from '../shared/session.service';
import { EntityListComponent } from '../../shared/components/entity-list.component';
import { SortOrder } from '../../shared/models/sort-order.model';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';
import { ActivatedRoute, Router } from '@angular/router';

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

    constructor(
        protected sessionService: SessionService,
        protected deleteEntityDialogService: DeleteEntityDialogService,
        protected route: ActivatedRoute,
        protected router: Router) {
        super(sessionService, deleteEntityDialogService, route, router);
    }

}

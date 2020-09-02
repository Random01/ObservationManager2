import { Component } from '@angular/core';

import { Session } from '../../shared/models/session.model';
import { SessionService } from '../shared/session.service';
import { EntityListComponent } from '../../shared/components/entity-list.component';
import { SortOrder } from '../../shared/models/sort-order.model';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppContextService } from '../../shared/services/app-context.service';

@Component({
    selector: 'om-sessions',
    templateUrl: './sessions.component.html',
    styleUrls: ['./sessions.component.css'],
})
export class SessionsComponent extends EntityListComponent<Session> {

    public displayedColumns: string[] = [
        'begin',
        'site',
        'weather',
        'actions',
    ];

    sortDirection = SortOrder.Asc;
    sortField = 'begin';

    constructor(
        sessionService: SessionService,
        deleteEntityDialogService: DeleteEntityDialogService,
        route: ActivatedRoute,
        router: Router,
        appContext: AppContextService,
    ) {
        super(sessionService, deleteEntityDialogService, route, router, appContext);
    }

}

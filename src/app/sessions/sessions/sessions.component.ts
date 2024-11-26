import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AsyncPipe, DatePipe, NgIf } from '@angular/common';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { Session } from '../../shared/models/session.model';
import { SessionService } from '../shared/session.service';
import { EntityListComponent } from '../../shared/components/entity-list.component';
import { SortOrder } from '../../shared/models/sort-order.model';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';

@Component({
    selector: 'om-sessions',
    templateUrl: 'sessions.component.html',
    styleUrl: 'sessions.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatPaginatorModule,
        MatTableModule,
        MatTooltipModule,
        MatButtonModule,
        MatIconModule,
        RouterLink,
        NgIf,
        AsyncPipe,
        DatePipe,
    ]
})
export class SessionsComponent extends EntityListComponent<Session> {

  public readonly displayedColumns: string[] = [
    'begin',
    'site',
    'weather',
    'actions',
  ];

  constructor(
    sessionService: SessionService,
    deleteEntityDialogService: DeleteEntityDialogService,
    route: ActivatedRoute,
    router: Router,
  ) {
    super(sessionService, deleteEntityDialogService, route, router);

    this.sortDirection = SortOrder.Asc;
    this.sortField = 'begin';
  }

}

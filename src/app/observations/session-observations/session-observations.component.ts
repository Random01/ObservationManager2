import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AsyncPipe, DatePipe, NgIf } from '@angular/common';

import { map, switchMap } from 'rxjs';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { Observation } from '../../shared/models/models';
import { ObservationService } from '../shared/observation.service';
import { SessionService } from '../../sessions/shared/session.service';
import { EntityListComponent } from '../../shared/components/entity-list.component';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';
import { ObservationSearchParams } from '../shared/observation-search-params.model';
import { RequestParams } from '../../shared/services/request-params.model';
import { ExportType } from '../../shared/models/export-type.model';
import { ExportRequestParams } from '../../shared/services';
import { SessionObservationExportRequestParams } from './session-observation-export-request-params.model';
import { SessionInfoComponent } from "../../sessions/session-info/session-info.component";

@Component({
    selector: 'om-session-observations',
    templateUrl: 'session-observations.component.html',
    styleUrl: 'session-observations.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatPaginatorModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        RouterLink,
        NgIf,
        AsyncPipe,
        DatePipe,
        SessionInfoComponent,
    ]
})
export class SessionObservationsComponent extends EntityListComponent<Observation> {

  public readonly session$ = this.route.params.pipe(
    map(params => params['sessionId']),
    switchMap(sessionId => this.sessionService.getById(sessionId)),
  );

  public readonly displayedColumns: string[] = [
    'date',
    'targetName',
    'scopeModel',
    'eyepieceModel',
    'filterModel',
    'result',
    'actions',
  ];

  constructor(
    private readonly sessionService: SessionService,
    route: ActivatedRoute,
    router: Router,
    observationService: ObservationService,
    deleteEntityDialogService: DeleteEntityDialogService,
  ) {
    super(observationService, deleteEntityDialogService, route, router);
  }

  public getSessionId(): string {
    return this.route.snapshot.paramMap.get('sessionId');
  }

  public addNewObservation() {
    this.router.navigate([
      'sessions',
      this.getSessionId(),
      'observations',
      'new-observation',
    ]);
  }

  public backToSession() {
    this.router.navigate(['sessions', this.getSessionId()]);
  }

  public backToMySessions() {
    this.router.navigate(['sessions']);
  }

  protected override getExportFileName(): string {
    return 'Observations';
  }

  protected override getRequestParams(params?: Partial<RequestParams>): RequestParams {
    return new ObservationSearchParams({
      ...params,
      session: this.getSessionId(),
    });
  }

  protected override getExportRequestParameters(exportType: ExportType): ExportRequestParams {
    return new SessionObservationExportRequestParams({
      ...super.getExportRequestParameters(exportType),
      session: this.getSessionId(),
    });
  }

}

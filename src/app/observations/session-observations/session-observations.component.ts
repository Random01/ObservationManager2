import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Observation, Session } from '../../shared/models/models';
import { ObservationService } from '../shared/observation.service';
import { SessionService } from '../../sessions/shared/session.service';
import { EntityListComponent } from '../../shared/components/entity-list.component';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';
import { ObservationSearchParams } from '../shared/observation-search-params.model';
import { RequestParams } from '../../shared/services/request-params.model';
import { AppContextService } from '../../shared/services/app-context.service';

@Component({
  selector: 'om-session-observations',
  templateUrl: './session-observations.component.html',
  styleUrls: ['./session-observations.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SessionObservationsComponent extends EntityListComponent<Observation> {

  public session: Session | null = null;

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
    appContext: AppContextService,
  ) {
    super(observationService, deleteEntityDialogService, route, router, appContext);
  }

  public override ngOnInit(): void {
    super.ngOnInit();
    this.loadSession();
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

  protected override getRequestParams(): RequestParams {
    return Object.assign(new ObservationSearchParams(), {
      sessionId: this.getSessionId(),
    });
  }

  private loadSession(): void {
    this.sessionService
      .getById(this.getSessionId())
      .then(session => this.session = session);
  }

}

import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Observation, Session } from '../../shared/models/models';
import { ObservationService } from '../shared/observation.service';
import { SessionService } from '../../sessions/shared/session.service';
import { EntityListComponent } from '../../shared/components/entity-list.component';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';
import { ObservationSearchParams } from '../shared/observation-search-params.model';
import { RequestParams } from '../../shared/services/request-params.model';

@Component({
    selector: 'om-session-observations',
    templateUrl: './session-observations.component.html',
    styleUrls: [
        './session-observations.component.css'
    ]
})
export class SessionObservationsComponent extends EntityListComponent<Observation> {

    items: Observation[];
    session: Session;

    displayedColumns: string[] = [
        'date',
        'targetName',
        'scopeModel',
        'eyepieceModel',
        'filterModel',
        'result',
        'actions',
    ];

    constructor(
        route: ActivatedRoute,
        router: Router,
        observationService: ObservationService,
        protected sessionService: SessionService,
        deleteEntityDialogService: DeleteEntityDialogService,
    ) {
        super(observationService, deleteEntityDialogService, route, router);
    }

    protected getRequestParams(): RequestParams {
        const params = new ObservationSearchParams();

        params.sessionId = this.getSessionId();

        return params;
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit(): void {
        super.ngOnInit();
        this.loadSession();
    }

    loadSession(): void {
        this.sessionService
            .getById(this.getSessionId())
            .then(session => this.session = session);
    }

    getSessionId(): string {
        return this.route.snapshot.paramMap.get('sessionId');
    }

    addNewObservation() {
        this.router.navigate([
            'sessions',
            this.getSessionId(),
            'observations',
            'new-observation'
        ]);
    }

    backToSession() {
        this.router.navigate(['sessions', this.getSessionId()]);
    }

    backToMySessions() {
        this.router.navigate(['sessions']);
    }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { Session } from '../../shared/models/session.model';
import { SessionService } from '../shared/session.service';

import { ObservationDialogComponent } from '../../observations/observation-dialog/observation-dialog.component';

import { Observation } from '../../shared/models/observation.model';
import { Target } from '../../shared/models/models';
import { BaseComponent } from '../../shared/components/base-component';
import { ObservationService } from '../../observations/shared/observation.service';
import { Eyepiece, Scope, Filter } from '../../shared/models/equipment/equipment';

@Component({
    selector: 'om-session-details',
    templateUrl: './session-details.component.html',
    styleUrls: ['./session-details.component.css'],
})
export class SessionDetailsComponent extends BaseComponent implements OnInit {

    session: Session;
    editMode: Boolean;

    constructor(
        private route: ActivatedRoute,
        private sessionService: SessionService,
        private dialog: MatDialog,
        private observationService: ObservationService,
    ) {
        super();
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

    public async addNewObservation() {
        const dialogRef = this.dialog.open(ObservationDialogComponent, {
            width: '400px',
            data: new Observation({
                session: this.session,
                target: new Target(),
                scope: new Scope(),
                filter: new Filter(),
                eyepiece: new Eyepiece()
            })
        });

        const result = await dialogRef.afterClosed().toPromise();
        if (result) {
            this.startLoading();
            try {
                await this.observationService.add(result);
            } finally {
                this.endLoading()
            }
        }
    }

}

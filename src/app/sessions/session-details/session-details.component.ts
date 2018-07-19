import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Session } from '../../shared/models/session.model';
import { SessionService } from '../shared/session.service';

import { ObservationDialogComponent } from '../../observations/observation-dialog/observation-dialog.component';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observation } from '../../shared/models/observation.model';
import { Target } from '../../shared/models/models';
import { BaseComponent } from '../../shared/components/base-component';
import { ObservationService } from '../../observations/shared/observation.service';
import { Eyepiece, Scope, Filter } from '../../shared/models/equipment/equipment';

@Component({
    selector: 'om-session-details',
    templateUrl: './session-details.component.html',
    styleUrls: ['./session-details.component.css'],
    providers: [
        SessionService,
        ObservationService
    ]
})

export class SessionDetailsComponent extends BaseComponent implements OnInit {

    session: Session;
    isLoading: Boolean;
    editMode: Boolean;

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private sessionService: SessionService,
        private dialog: MatDialog,
        private observationService: ObservationService
    ) {
        super();
    }

    startLoading(): void {
        this.isLoading = true;
    }

    endLoading(): void {
        this.isLoading = false;
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

    addNewObservation(): void {
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

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.startLoading();
                this.observationService
                    .add(result)
                    .then(() => this.endLoading());
            }
        });
    }

}

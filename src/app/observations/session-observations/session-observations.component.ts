import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Observation, Session } from '../../shared/models/models';
import { ObservationService } from '../shared/observation.service';
import { SessionService } from '../../sessions/shared/session.service';

@Component({
    selector: 'om-session-observations',
    templateUrl: './session-observations.component.html',
    styleUrls: [
        './session-observations.component.css'
    ]
})

export class SessionObservationsComponent implements OnInit {

    items: Observation[];
    session: Session;

    displayedColumns: string[] = [
        'date',
        'targetName',
        'scopeModel',
        'eyepieceModel',
        'actions'
    ];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private observationService: ObservationService,
        private sessionService: SessionService) {
    }

    ngOnInit(): void {
        this.loadItems();
        this.loadSession();
    }

    loadItems(): void {
        this.observationService
            .getSessionObservations(this.getSessionId())
            .then(observations => this.items = observations);
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

    remove(itemToRemove: Observation) {
        this.observationService.delete(itemToRemove.id).then(() => {
            this.loadItems();
        });
    }

    backToMySessions() {
        this.router.navigate(['sessions']);
    }
}

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Observation } from '../../shared/models/models';
import { ObservationService } from '../shared/observation.service';

@Component({
    selector: 'om-session-observations',
    templateUrl: './session-observations.component.html',
    styleUrls: [
        './session-observations.component.css'
    ],
    providers: [
        ObservationService
    ]
})

export class SessionObservationsComponent implements OnInit {

    items: Observation[];

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
        private observationService: ObservationService) {
    }

    ngOnInit(): void {
        this.loadItems();
    }

    loadItems(): void {
        this.observationService
            .getSessionObservations(this.getSessionId())
            .then(observations => this.items = observations);
    }

    getSessionId(): string {
        return this.route.snapshot.paramMap.get('sessionId');
    }

    addNewObservation() {
        this.router.navigate(['sessions', this.getSessionId(), 'observations', 'new-observation']);
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

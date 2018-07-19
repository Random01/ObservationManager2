import { Component, Input, OnInit } from '@angular/core';

import { Observation } from '../../shared/models/models';
import { ObservationService } from '../shared/observation.service';
import { ScopeService } from '../../scopes/shared/scope.service';

@Component({
    selector: 'om-observations',
    templateUrl: './observations.component.html',
    styleUrls: [
        './observations.component.css'
    ],
    providers: [
        ObservationService,
        ScopeService
    ]
})

export class ObservationsComponent implements OnInit {

    observations: Observation[];

    constructor(private observationService: ObservationService) {
    }

    ngOnInit(): void {
        this.observationService
            .getAll()
            .then(observations => this.observations = observations);
    }

}

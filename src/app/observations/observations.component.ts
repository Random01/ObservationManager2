﻿import { Component, Input, OnInit } from '@angular/core';

import { Observation } from './../shared/models/models';
import { ObservationService } from './shared/observation.service';

@Component({
    selector: 'om-observations',
    templateUrl: './observations.component.html',
    providers: [ObservationService]
})

export class ObservationsComponent implements OnInit {

    observations: Observation[];

    constructor(private observationService: ObservationService) {
    }

    ngOnInit(): void {
        this.observationService.getObservations().then(observations => this.observations = observations);
    }

}
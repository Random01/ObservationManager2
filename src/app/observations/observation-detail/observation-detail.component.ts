import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Observation } from './../../shared/models/models';
import { ObservationService } from './../shared/observation.service';


@Component({
    selector: 'om-observation-detail',
    templateUrl: './observation-detail.component.html',
    providers: [ObservationService]
})

export class ObservationDetailComponent implements OnInit {

    observation: Observation;

    constructor(
        private observationService: ObservationService,
        private route: ActivatedRoute,
        private location: Location
    ) {
    }

    getObservation(): void{
        const id = this.route.snapshot.paramMap.get('id');

        this.observationService
            .getObservation(id)
            .then((observation) => this.observation = observation);
    }

    ngOnInit(): void {
        this.getObservation();
    }

    goBack(): void {
        this.location.back();
    }
}
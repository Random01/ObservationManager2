import { Component, OnInit } from '@angular/core';
import { Observation } from './../../shared/models/models';
import { ObservationService } from './../shared/observation.service';

@Component({
    selector: 'om-observation-detail',
    templateUrl: './observation-detail.component.html',
    providers: [ObservationService]
})

export class ObservationDetailComponent implements OnInit {

    observation: Observation;

    constructor(private observationService: ObservationService){
    }

    ngOnInit(): void {
        this.observationService
        .getObservation('aaaa')
        .then((observation) => this.observation = observation);
    }

    goBack(): void {
    }

    save(): void {
    }
}
import { Component, OnInit } from '@angular/core';

import { Observation } from '../../shared/models/models';


@Component({
    selector: 'om-observation-list',
    templateUrl: './observation-list.component.html'
})
export class ObservationListComponent implements OnInit {

    observations: Observation[];

    add(newObservation: Observation) {
        this.observations.push(newObservation);
    }

    ngOnInit(): void {
        this.observations = [];
    }

}

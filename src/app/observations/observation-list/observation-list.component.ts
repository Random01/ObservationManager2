import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Observation } from '../../shared/models/models';


@Component({
    selector: 'om-observation-list',
    templateUrl: './observation-list.component.html'
})

export class ObservationList implements OnInit {

    observations: Observation[];

    add(newObservation:Observation) {
        this.observations.push(newObservation);
    }

    ngOnInit(): void {
        this.observations = [];
    }



}
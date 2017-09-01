import { Component, Input } from '@angular/core';
import { Observation } from './../../shared/models/models';

@Component({
    selector: 'om-observation',
    templateUrl: './observation.component.html'
})

export class ObservationComponent {
    @Input() observation: Observation;
}
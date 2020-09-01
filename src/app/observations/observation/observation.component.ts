import { Component, Input } from '@angular/core';

import { Observation } from '../../shared/models/models';

@Component({
    selector: 'om-observation',
    templateUrl: './observation.component.html',
    styleUrls: ['./observation.component.css'],
})
export class ObservationComponent {

    @Input() observation: Observation;

}

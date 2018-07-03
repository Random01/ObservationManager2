import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { Observation } from '../../shared/models/models';
import { ObservationService } from '../shared/observation.service';

import { AddEntityComponent } from '../../shared/components/add-entity.component';

@Component({
    selector: 'om-add-observation',
    templateUrl: './add-observation.component.html',
    providers: [ObservationService]
})

export class AddObservationComponent extends AddEntityComponent<Observation> {
    constructor(
        private router: Router,
        private observatioService: ObservationService) {
        super(observatioService);
    }

    goBack() {
        this.router.navigate(['/observations']);
    }
}

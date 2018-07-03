import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { EditEntityComponent } from '../../shared/components/edit-entity.component';
import { Observation } from '../../shared/models/models';
import { ObservationService } from '../shared/observation.service';

@Component({
    selector: 'om-edit-observation',
    templateUrl: './edit-observation.component.html',
    providers: [ObservationService]
})

export class EditObservationComponent extends EditEntityComponent<Observation> {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private sessionService: ObservationService) {
        super(sessionService);
    }

    getItemId(): string {
        return this.route.snapshot.paramMap.get('id');
    }

    goBack() {
        this.router.navigate(['/sessions']);
    }
}

import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { EditEntityComponent } from '../../shared/components/edit-entity.component';
import { Observation } from '../../shared/models/models';
import { ObservationService } from '../shared/observation.service';

@Component({
    selector: 'om-edit-observation',
    templateUrl: './edit-observation.component.html',
})
export class EditObservationComponent extends EditEntityComponent<Observation> {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        service: ObservationService,
    ) {
        super(service);
    }

    getItemId(): string {
        return this.route.snapshot.paramMap.get('observationId');
    }

    getSessionId(): string {
        return this.route.snapshot.paramMap.get('sessionId');
    }

    goBack() {
        this.router.navigate([`/sessions/${this.getSessionId()}/observations`]);
    }
}

import { Component } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { Observation, Session } from '../../shared/models/models';
import { ObservationService } from '../shared/observation.service';

import { AddEntityComponent } from '../../shared/components/add-entity.component';

@Component({
    selector: 'om-add-observation',
    templateUrl: './add-observation.component.html',
    providers: [ObservationService]
})

export class AddObservationComponent extends AddEntityComponent<Observation> {
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private observatioService: ObservationService) {
        super(observatioService);
    }

    getSessionId(): string {
        return this.route.snapshot.paramMap.get('sessionId');
    }

    goBack() {
        this.router.navigate([`/sessions/${this.getSessionId()}/observations`]);
    }

    addItem() {
        this.item.session = new Session({
            id: this.getSessionId()
        });

        super.addItem();
    }

}

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
        private service: ObservationService) {
        super(service);
    }

    getSessionId(): string {
        return this.route.snapshot.paramMap.get('sessionId');
    }

    goBack() {
        this.router.navigate([`/sessions/${this.getSessionId()}/observations`]);
    }

    createNew() {
        return super.createNew().then((item) => {
            item.session = new Session({
                id: this.getSessionId()
            });

            return item;
        });
    }

    public addItemAndContinue() {
        this.startLoading();
        return this.storageService.add(this.item)
            .then(() => {
                return this.createNew();
            })
            .then((item) => {
                item.scope = this.item.scope;
                item.filter = this.item.filter;
                item.eyepiece = this.item.eyepiece;
                item.lens = this.item.lens;

                this.item = item;
                this.endLoading();
            });
    }
}

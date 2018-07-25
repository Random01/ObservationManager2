import { Component } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { Observation, Session } from '../../shared/models/models';
import { ObservationService } from '../shared/observation.service';

import { AddEntityComponent } from '../../shared/components/add-entity.component';
import { SessionService } from '../../sessions/shared/session.service';

@Component({
    selector: 'om-add-observation',
    templateUrl: './add-observation.component.html'
})

export class AddObservationComponent extends AddEntityComponent<Observation> {
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private observationService: ObservationService,
        private sessionService: SessionService) {
        super(observationService);
    }

    getSessionId(): string {
        return this.route.snapshot.paramMap.get('sessionId');
    }

    goBack() {
        this.router.navigate([`/sessions/${this.getSessionId()}/observations`]);
    }

    createNew() {
        return super.createNew()
            .then((item) => {
                return this.sessionService.getById(this.getSessionId())
                    .then((session) => {
                        item.session = session;
                        item.site = session.site;
                        item.begin = session.begin;
                        return item;
                    });
            });
    }

    public addItemAndContinue() {
        this.startLoading();
        return this.observationService.add(this.item)
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

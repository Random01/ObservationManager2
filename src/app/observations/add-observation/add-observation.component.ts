import { Component } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { Observation } from '../../shared/models/models';
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

    public goBack() {
        this.router.navigate([`/sessions/${this.getSessionId()}/observations/`]);
    }

    public async createNew() {
        const item = await super.createNew();
        const session = await this.sessionService.getById(this.getSessionId());

        item.session = session;
        item.site = session.site;
        item.begin = session.begin;

        return item;
    }

    public async addItemAndContinue() {
        this.startLoading();

        try {
            await this.observationService.add(this.item);

            const item = await this.createNew();

            // Copy previous settings to a new instance for convinience
            item.scope = this.item.scope;
            item.filter = this.item.filter;
            item.eyepiece = this.item.eyepiece;
            item.lens = this.item.lens;
            // Observation Conditions
            item.faintestStar = this.item.faintestStar;
            item.seeing = this.item.seeing;
            item.skyQuality = this.item.skyQuality;

            this.item = item;
        } finally {
            this.endLoading();
        }
    }
}

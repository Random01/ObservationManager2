import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { SessionService } from '../shared/session.service';
import { Session } from '../../shared/models/models';

import { AddEntityComponent } from '../../shared/components/add-entity.component';
import { AppContextService } from '../../shared/services/app-context.service';

@Component({
    selector: 'om-add-session',
    templateUrl: './add-session.component.html',
})
export class AddSessionComponent extends AddEntityComponent<Session> {

    constructor(
        protected router: Router,
        service: SessionService,
        appContext: AppContextService,
    ) {
        super(service, appContext);
    }

    public goBack() {
        this.router.navigate(['/sessions']);
    }

    public async addAndGo() {
        this.startLoading();

        try {
            const result = await this.storageService.add(this.item);
            if (result.isSuccess()) {
                this.router.navigate([`/sessions/${result.payload.id}/observations/new-observation`]);
            }
        } catch (error) {
            this.handleError(error);
            this.endLoading();
        }
    }
}

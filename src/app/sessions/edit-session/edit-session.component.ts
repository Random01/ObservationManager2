import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { EditEntityComponent } from '../../shared/components/edit-entity.component';

import { SessionService } from '../shared/session.service';
import { Session } from '../../shared/models/models';
import { AppContextService } from '../../shared/services/app-context.service';

@Component({
    selector: 'om-edit-session',
    templateUrl: './edit-session.component.html',
})
export class EditSessionComponent extends EditEntityComponent<Session> {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        service: SessionService,
        appContext: AppContextService,
    ) {
        super(service, appContext);
    }

    getItemId(): string {
        return this.route.snapshot.paramMap.get('sessionId');
    }

    public goBack() {
        this.router.navigate(['/sessions']);
    }

    public showObservations() {
        this.router.navigate([`/sessions/${this.getItemId()}/observations`]);
    }
}

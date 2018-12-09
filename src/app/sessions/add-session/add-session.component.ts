import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { SessionService } from '../shared/session.service';
import { Session } from '../../shared/models/models';

import { AddEntityComponent } from '../../shared/components/add-entity.component';

@Component({
    selector: 'om-add-session',
    templateUrl: './add-session.component.html',
    providers: [SessionService]
})

export class AddSessionComponent extends AddEntityComponent<Session> {
    constructor(
        private router: Router,
        private sessionService: SessionService) {
        super(sessionService);
    }

    goBack() {
        this.router.navigate(['/sessions']);
    }

    addAndGo() {
        this.startLoading();
        this.storageService.add(this.item).then((result) => {
            this.endLoading();

            if (result.isSuccess()) {
                this.router.navigate([`/sessions/${result.payload.id}/observations`]);
            }
        }, () => this.endLoading());
    }
}

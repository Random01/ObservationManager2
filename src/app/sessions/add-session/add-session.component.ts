import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { SessionService } from '../shared/session.service';
import { Session } from '../../shared/models/models';

import { AddEntityComponent } from '../../shared/components/add-entity.component';
import { MessageService } from '../../shared/services/message.service';

@Component({
    selector: 'om-add-session',
    templateUrl: './add-session.component.html',
})
export class AddSessionComponent extends AddEntityComponent<Session> {

    constructor(
        private router: Router,
        service: SessionService,
        private readonly messageService: MessageService,
    ) {
        super(service);
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
            this.messageService.showError(error);
            this.endLoading();
        }
    }
}

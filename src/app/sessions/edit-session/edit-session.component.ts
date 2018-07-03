import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { EditEntityComponent } from '../../shared/components/edit-entity.component';

import { SessionService } from '../shared/session.service';
import { Session } from '../../shared/models/models';


@Component({
    selector: 'om-edit-session',
    templateUrl: './edit-session.component.html',
    providers: [SessionService]
})

export class EditSessionComponent extends EditEntityComponent<Session> {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private sessionService: SessionService) {
        super(sessionService);
    }

    getItemId(): string {
        return this.route.snapshot.paramMap.get('id');
    }

    goBack() {
        this.router.navigate(['/sessions']);
    }
}

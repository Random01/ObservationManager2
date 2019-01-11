import { Component, Input } from '@angular/core';

import { Router } from '@angular/router';

import { Session } from '../../shared/models/models';

@Component({
    selector: 'om-session-info',
    templateUrl: './session-info.component.html',
    styleUrls: [
        './session-info.component.css'
    ]
})
export class SessionInfoComponent {
    @Input() session: Session;

    constructor(
        private router: Router
    ) {
    }

    goToSession(): void {
        this.router.navigate([`/sessions/${this.session.id}`]);
    }
}

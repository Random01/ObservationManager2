import { Component, Input } from '@angular/core';
import { Session } from './../../shared/models/session.model';

@Component({
    selector: 'session',
    templateUrl: './session.component.html'
})

export class SessionComponent {
    session: Session;
}
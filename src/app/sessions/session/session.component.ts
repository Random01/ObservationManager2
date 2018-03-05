import { Component, Input, OnInit } from '@angular/core';
import { Session } from './../../shared/models/session.model';

import { FormsModule } from '@angular/forms';

@Component({
    selector: 'om-session',
    templateUrl: './session.component.html'
})

export class SessionComponent implements OnInit {
    @Input() session: Session;

    ngOnInit() {

    }
}

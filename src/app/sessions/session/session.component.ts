import { Component, Input } from '@angular/core';

import { Session } from '../../shared/models/models';

@Component({
  selector: 'om-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css'],
})
export class SessionComponent {
  @Input() session?: Session;
}

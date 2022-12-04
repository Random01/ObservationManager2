import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Session } from '../../shared/models/models';

@Component({
  selector: 'om-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SessionComponent {
  @Input() session?: Session;
}

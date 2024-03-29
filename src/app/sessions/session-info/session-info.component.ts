import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Router } from '@angular/router';

import { Session } from '../../shared/models/models';

@Component({
  selector: 'om-session-info',
  templateUrl: './session-info.component.html',
  styleUrls: ['./session-info.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SessionInfoComponent {
  @Input() session?: Session;

  constructor(
    private readonly router: Router,
  ) { }

  public goToSession(): void {
    this.router.navigate([`/sessions/${this.session.id}`]);
  }
}

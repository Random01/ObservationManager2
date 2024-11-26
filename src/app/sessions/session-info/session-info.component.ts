import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { Session } from '../../shared/models/models';

@Component({
    selector: 'om-session-info',
    templateUrl: 'session-info.component.html',
    styleUrl: 'session-info.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        DatePipe,
    ]
})
export class SessionInfoComponent {

  @Input({ required: true }) session?: Session;

  constructor(
    private readonly router: Router,
  ) { }

  public goToSession(): void {
    // todo:
    this.router.navigate([`/sessions/${this.session.id}`]);
  }
}

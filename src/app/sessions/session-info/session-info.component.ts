import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
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
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, DatePipe],
})
export class SessionInfoComponent {
  readonly session = input.required<Session>();

  private readonly router = inject(Router);

  public goToSession(): void {
    this.router.navigate(['sessions', this.session().id]);
  }
}

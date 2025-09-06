import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { EditEntityComponent } from '../../shared/components/edit-entity.component';
import { SessionService } from '../shared/session.service';
import { Session } from '../../shared/models/models';
import { SessionComponent } from '../session';

@Component({
    selector: 'om-edit-session',
    templateUrl: 'edit-session.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
    MatButtonModule,
    AsyncPipe,
    SessionComponent
]
})
export class EditSessionComponent extends EditEntityComponent<Session> {

  constructor(
    service: SessionService,
  ) {
    super(service);
  }

  public showObservations(): void {
    this.router.navigate(['sessions', this.getItemId(), 'observations']);
  }

  protected override getItemId(): string {
    return this.route.snapshot.paramMap.get('sessionId');
  }

}

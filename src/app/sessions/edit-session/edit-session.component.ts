import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EditEntityComponent } from '../../shared/components/edit-entity.component';
import { SessionService } from '../shared/session.service';
import { Session } from '../../shared/models/models';

@Component({
  selector: 'om-edit-session',
  templateUrl: 'edit-session.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditSessionComponent extends EditEntityComponent<Session> {

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    service: SessionService,
  ) {
    super(service);
  }

  public goBack(): void {
    this.router.navigate(['/sessions']);
  }

  public showObservations(): void {
    this.router.navigate([`/sessions/${this.getItemId()}/observations`]);
  }

  protected getItemId(): string {
    return this.route.snapshot.paramMap.get('sessionId');
  }

}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../shared/session.service';
import { Session } from '../../shared/models/models';
import { AddEntityComponent } from '../../shared/components/add-entity.component';
import { AppContextService } from '../../shared/services/app-context.service';

@Component({
  selector: 'om-add-session',
  templateUrl: './add-session.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddSessionComponent extends AddEntityComponent<Session> {

  constructor(
    private readonly router: Router,
    service: SessionService,
    appContext: AppContextService,
  ) {
    super(service, appContext);
  }

  public goBack() {
    this.router.navigate(['/sessions']);
  }

  public async addAndGo() {
    this.startLoading();

    try {
      const item = this.itemSubject.getValue();
      const result = await this.storageService.add(item);
      if (result.isSuccess()) {
        this.router.navigate([`/sessions/${result.payload.id}/observations/new-observation`]);
      }
    } catch (error) {
      this.handleError(error, 'Unable to add a new item.');
      this.endLoading();
    }
  }
}

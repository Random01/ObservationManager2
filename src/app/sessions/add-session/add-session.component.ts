import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { firstValueFrom } from 'rxjs';

import { SessionService } from '../shared/session.service';
import { Session } from '../../shared/models/models';
import { AddEntityComponent } from '../../shared/components/add-entity.component';
import { SessionComponent } from "../session/session.component";

@Component({
    selector: 'om-add-session',
    templateUrl: 'add-session.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
    MatButtonModule,
    AsyncPipe,
    SessionComponent
]
})
export class AddSessionComponent extends AddEntityComponent<Session> {

  constructor(
    service: SessionService,
  ) {
    super(service);
  }

  public async addAndGo() {
    this.startLoading();

    try {
      const item = this.itemSubject.getValue();
      const result = await firstValueFrom(this.storageService.add(item));
      if (result.isSuccess()) {
        this.router.navigate([`/sessions/${result.payload.id}/observations/new-observation`]);
      }
    } catch (error) {
      this.handleError(error, 'Unable to add a new item.');
      this.endLoading();
    }
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observation } from '../../shared/models/models';
import { ObservationService } from '../shared/observation.service';
import { AddEntityComponent } from '../../shared/components/add-entity.component';
import { SessionService } from '../../sessions/shared/session.service';
import { AppContextService } from '../../shared/services/app-context.service';

@Component({
  selector: 'om-add-observation',
  templateUrl: './add-observation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddObservationComponent extends AddEntityComponent<Observation> {

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    observationService: ObservationService,
    private readonly sessionService: SessionService,
    appContext: AppContextService,
  ) {
    super(observationService, appContext);
  }

  public goBack() {
    this.router.navigate([`/sessions/${this.getSessionId()}/observations/`]);
  }

  public override async createNew(params?: Partial<Observation>) {
    const item = await super.createNew(params);
    const session = await this.sessionService.getById(this.getSessionId());

    item.session = session;
    item.site = session.site;
    item.begin = session.begin;

    return item;
  }

  public override async addItemAndContinue() {
    this.startLoading();

    try {
      const item = this.itemSubject.getValue();
      await this.storageService.add(item);

      const newItem = await this.createNew({
        // Copy previous settings to a new instance for convenience
        scope: item.scope,
        filter: item.filter,
        eyepiece: item.eyepiece,
        lens: item.lens,
        // Observation Conditions
        faintestStar: item.faintestStar,
        seeing: item.seeing,
        skyQuality: item.skyQuality,
      });

      this.itemSubject.next(newItem);
    } catch (error) {
      this.handleError(error, 'Unable to add a new item.');
    } finally {
      this.endLoading();
    }
  }

  private getSessionId(): string {
    return this.route.snapshot.paramMap.get('sessionId');
  }

}

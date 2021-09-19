import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { EditEntityComponent } from '../../shared/components/edit-entity.component';
import { Observation } from '../../shared/models/models';
import { ObservationService } from '../shared/observation.service';
import { AppContextService } from '../../shared/services/app-context.service';

@Component({
  selector: 'om-edit-observation',
  templateUrl: './edit-observation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditObservationComponent extends EditEntityComponent<Observation> {

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    service: ObservationService,
    appContext: AppContextService,
  ) {
    super(service, appContext);
  }

  public getItemId(): string {
    return this.route.snapshot.paramMap.get('observationId');
  }

  public getSessionId(): string {
    return this.route.snapshot.paramMap.get('sessionId');
  }

  public goBack() {
    this.router.navigate([`/sessions/${this.getSessionId()}/observations`]);
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { EditEntityComponent } from '../../shared/components/edit-entity.component';
import { Observation } from '../../shared/models/models';
import { ObservationService } from '../shared/observation.service';
import { ObservationComponent } from '../observation';

@Component({
  selector: 'om-edit-observation',
  templateUrl: 'edit-observation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, AsyncPipe, ObservationComponent],
})
export class EditObservationComponent extends EditEntityComponent<Observation> {
  constructor(service: ObservationService) {
    super(service);
  }

  public override getItemId(): string {
    return this.route.snapshot.paramMap.get('observationId');
  }
}

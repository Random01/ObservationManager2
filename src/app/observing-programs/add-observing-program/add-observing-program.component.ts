import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { AddEntityComponent } from '../../shared/components/add-entity.component';
import { ObservingProgram } from '../../shared/models/observing-program.model';
import { ObservingProgramsService } from '../shared/observing-programs.service';
import { ObservingProgramComponent } from '../observing-program';

@Component({
  selector: 'om-add-observing-program',
  templateUrl: 'add-observing-program.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, ObservingProgramComponent, AsyncPipe],
})
export class AddObservingProgramComponent extends AddEntityComponent<ObservingProgram> {
  constructor(service: ObservingProgramsService) {
    super(service);
  }
}

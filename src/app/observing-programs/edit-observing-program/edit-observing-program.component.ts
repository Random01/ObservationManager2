import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIf, AsyncPipe } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { EditEntityComponent } from '../../shared/components/edit-entity.component';
import { ObservingProgram } from '../../shared/models/observing-program.model';
import { ObservingProgramsService } from '../shared/observing-programs.service';
import { ObservingProgramComponent } from '../observing-program';

@Component({
    selector: 'om-edit-observing-program',
    templateUrl: 'edit-observing-program.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatButtonModule,
        ObservingProgramComponent,
        NgIf,
        AsyncPipe,
    ]
})
export class EditObservingProgramComponent extends EditEntityComponent<ObservingProgram> {

  constructor(
    service: ObservingProgramsService,
  ) {
    super(service);
  }

  public getItemId(): string {
    return this.route.snapshot.paramMap.get('programId');
  }

}

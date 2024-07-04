import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { AddEntityComponent } from '../../shared/components/add-entity.component';
import { ObservingProgram } from '../../shared/models/observing-program.model';
import { ObservingProgramsService } from '../shared/observing-programs.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { ObservingProgramComponent } from '../observing-program';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'om-add-observing-program',
  templateUrl: 'add-observing-program.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatButtonModule,
    ObservingProgramComponent,
    NgIf,
    AsyncPipe,
  ],
})
export class AddObservingProgramComponent extends AddEntityComponent<ObservingProgram> {

  constructor(
    private readonly router: Router,
    service: ObservingProgramsService,
  ) {
    super(service);
  }

  public goBack() {
    this.router.navigate(['/observing-programs']);
  }
}

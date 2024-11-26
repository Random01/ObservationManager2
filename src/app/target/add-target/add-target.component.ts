import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { AddEntityComponent } from '../../shared/components/add-entity.component';
import { Target } from '../../shared/models/models';
import { TargetService } from '../shared/target.service';
import { TargetComponent } from '../target';

@Component({
    selector: 'om-add-target',
    templateUrl: 'add-target.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatButtonModule,
        NgIf,
        AsyncPipe,
        TargetComponent,
    ]
})
export class AddTargetComponent extends AddEntityComponent<Target> {

  constructor(
    service: TargetService,
  ) {
    super(service);
  }

}

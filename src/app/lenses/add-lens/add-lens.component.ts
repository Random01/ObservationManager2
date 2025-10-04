import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { LensService } from '../shared/lens.service';
import { AddEntityComponent } from '../../shared/components/add-entity.component';
import { Lens } from '../../shared/models/equipment/equipment';
import { LensComponent } from '../lens';

@Component({
    selector: 'om-add-lens',
    templateUrl: 'add-lens.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
    MatButtonModule,
    AsyncPipe,
    LensComponent
]
})
export class AddLensComponent extends AddEntityComponent<Lens> {

  constructor(
    lensService: LensService,
  ) {
    super(lensService);
  }

}

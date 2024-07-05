import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { EditEntityComponent } from '../../shared/components/edit-entity.component';
import { TargetService } from '../shared/target.service';
import { Target } from '../../shared/models/models';
import { TargetComponent } from '../target';

@Component({
  selector: 'om-edit-target',
  templateUrl: 'edit-target.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatButtonModule,
    NgIf,
    AsyncPipe,
    TargetComponent,
  ],
})
export class EditTargetComponent extends EditEntityComponent<Target> {

  constructor(
    service: TargetService,
  ) {
    super(service);
  }

  public getItemId(): string {
    return this.route.snapshot.paramMap.get('id');
  }

}

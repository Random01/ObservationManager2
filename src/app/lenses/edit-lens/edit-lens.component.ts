import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { EditEntityComponent } from '../../shared/components/edit-entity.component';
import { Lens } from '../../shared/models/equipment/equipment';
import { LensService } from '../shared/lens.service';
import { LensComponent } from '../lens';

@Component({
  selector: 'om-edit-lens',
  templateUrl: 'edit-lens.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, AsyncPipe, LensComponent],
})
export class EditLensComponent extends EditEntityComponent<Lens> {
  constructor(lensService: LensService) {
    super(lensService);
  }

  public getItemId(): string {
    return this.route.snapshot.paramMap.get('lensId');
  }
}

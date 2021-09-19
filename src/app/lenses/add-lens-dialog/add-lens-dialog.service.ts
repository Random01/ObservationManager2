import { Injectable } from '@angular/core';

import { AddNewEntityDialogService } from '../../shared/services/add-new-entity-dialog.service';
import { Lens } from '../../shared/models/equipment/equipment';
import { AddLensDialogComponent } from './add-lens-dialog.component';

@Injectable({ providedIn: 'root' })
export class AddLensDialogService extends AddNewEntityDialogService<Lens> {

  protected createDialog() {
    return this.dialog.open(AddLensDialogComponent, {
      width: '300px',
    });
  }

}

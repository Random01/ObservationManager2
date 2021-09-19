import { Injectable } from '@angular/core';

import { AddNewEntityDialogService } from '../../../shared/services/add-new-entity-dialog.service';
import { Target } from '../../../shared/models/models';
import { AddTargetDialogComponent } from './add-target-dialog.component';

@Injectable({ providedIn: 'root' })
export class AddTargetDialogService extends AddNewEntityDialogService<Target> {

  public createDialog() {
    return this.dialog.open(AddTargetDialogComponent, {
      width: '350px',
    });
  }

}

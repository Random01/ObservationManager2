import { Injectable } from '@angular/core';

import { AddNewEntityDialogService } from '../../shared/services/add-new-entity-dialog.service';
import { Filter } from '../../shared/models/equipment/equipment';
import { AddFilterDialogComponent } from './add-filter-dialog.component';

@Injectable({ providedIn: 'root' })
export class AddFilterDialogService extends AddNewEntityDialogService<Filter> {

  public createDialog() {
    return this.dialog.open(AddFilterDialogComponent, {
      width: '550px',
    });
  }

}

import { Injectable } from '@angular/core';

import { AddNewEntityDialogService } from '../../shared/services/add-new-entity-dialog.service';
import { Scope } from '../../shared/models/equipment/equipment';
import { AddScopeDialogComponent } from './add-scope-dialog.component';

@Injectable({ providedIn: 'root' })
export class AddScopeDialogService extends AddNewEntityDialogService<Scope> {

  public createDialog() {
    return this.dialog.open(AddScopeDialogComponent, {
      width: '550px',
    });
  }
}

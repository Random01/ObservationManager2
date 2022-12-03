import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

import { AddNewEntityDialogService } from '../../shared/services/add-new-entity-dialog.service';
import { Eyepiece } from '../../shared/models/equipment/equipment';
import { AddEyepieceDialogComponent } from './add-eyepiece-dialog.component';

@Injectable({ providedIn: 'root' })
export class AddEyepieceDialogService extends AddNewEntityDialogService<Eyepiece> {

  constructor(dialog: MatDialog) {
    super(dialog);
  }

  protected createDialog(): MatDialogRef<AddEyepieceDialogComponent, Eyepiece> {
    return this.dialog.open(AddEyepieceDialogComponent, {
      width: '350px',
    });
  }

}

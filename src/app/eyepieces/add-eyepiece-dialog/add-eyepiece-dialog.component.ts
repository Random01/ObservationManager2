import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

import { AddEntityDialogComponent } from '../../shared/components/add-entity-dialog.component';
import { Eyepiece } from '../../shared/models/equipment/equipment';
import { EyepieceService } from '../shared/eyepiece.service';

@Component({
  selector: 'om-add-eyepiece-dialog',
  templateUrl: './add-eyepiece-dialog.component.html',
  styleUrls: [
    './add-eyepiece-dialog.component.css',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEyepieceDialogComponent extends AddEntityDialogComponent<Eyepiece, EyepieceService> {

  constructor(
    service: EyepieceService,
    dialogRef: MatDialogRef<AddEyepieceDialogComponent, Eyepiece>,
  ) {
    super(service, dialogRef);
  }

}

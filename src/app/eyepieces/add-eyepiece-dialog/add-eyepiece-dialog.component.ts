import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';

import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { AddEntityDialogComponent } from '../../shared/components/add-entity-dialog.component';
import { Eyepiece } from '../../shared/models/equipment/equipment';
import { EyepieceService } from '../shared/eyepiece.service';
import { EyepieceComponent } from '../eyepiece';

@Component({
  selector: 'om-add-eyepiece-dialog',
  templateUrl: 'add-eyepiece-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,

    NgIf,
    AsyncPipe,

    EyepieceComponent,
  ],
})
export class AddEyepieceDialogComponent extends AddEntityDialogComponent<Eyepiece, EyepieceService> {

  constructor(
    service: EyepieceService,
    dialogRef: MatDialogRef<AddEyepieceDialogComponent, Eyepiece>,
  ) {
    super(service, dialogRef);
  }

}

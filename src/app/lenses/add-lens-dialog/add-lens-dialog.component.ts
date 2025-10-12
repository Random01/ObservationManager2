import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { LensService } from '../shared/lens.service';
import { Lens } from '../../shared/models/equipment/equipment';
import { AddEntityDialogComponent } from '../../shared/components/add-entity-dialog.component';
import { LensComponent } from '../lens';

@Component({
  selector: 'om-add-lens-dialog',
  templateUrl: 'add-lens-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatDialogModule, MatButtonModule, AsyncPipe, LensComponent],
})
export class AddLensDialogComponent extends AddEntityDialogComponent<Lens, LensService> {
  constructor(storageService: LensService, dialogRef: MatDialogRef<AddLensDialogComponent, Lens>) {
    super(storageService, dialogRef);
  }
}

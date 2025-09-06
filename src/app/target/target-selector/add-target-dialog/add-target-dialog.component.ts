import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { AddEntityDialogComponent } from '../../../shared/components/add-entity-dialog.component';
import { TargetService } from '../../shared/target.service';
import { Target } from '../../../shared/models/models';
import { TargetComponent } from '../../target';

@Component({
    selector: 'om-add-target-dialog',
    templateUrl: 'add-target-dialog.component.html',
    imports: [
    MatButtonModule,
    MatDialogModule,
    AsyncPipe,
    TargetComponent
]
})
export class AddTargetDialogComponent extends AddEntityDialogComponent<Target, TargetService> {

  constructor(
    storageService: TargetService,
    dialogRef: MatDialogRef<AddTargetDialogComponent, Target>,
  ) {
    super(storageService, dialogRef);
  }

}

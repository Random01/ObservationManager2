import { Component, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Observation } from '../../shared/models/observation.model';

@Component({
  selector: 'om-observation-dialog',
  templateUrl: 'observation-dialog.component.html',
})
export class ObservationDialogComponent {

  public observation: Observation;

  constructor(
    public readonly dialogRef: MatDialogRef<ObservationDialogComponent, Observation>,
    @Inject(MAT_DIALOG_DATA) public readonly data: Observation,
  ) {
    this.observation = data;
  }

  public close(): void {
    this.dialogRef.close();
  }

  public add(): void {
    this.dialogRef.close(this.observation);
  }

}

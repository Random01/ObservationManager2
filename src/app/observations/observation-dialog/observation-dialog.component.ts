import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Observation } from '../../shared/models/observation.model';
import { ObservationComponent } from '../observation/observation.component';

@Component({
  selector: 'om-observation-dialog',
  templateUrl: 'observation-dialog.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [MatDialogModule, MatButtonModule, ObservationComponent],
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

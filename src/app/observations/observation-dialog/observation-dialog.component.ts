import { Component, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Observation } from '../../shared/models/observation.model';

@Component({
    selector: 'om-observation-dialog',
    templateUrl: 'observation-dialog.component.html',
})

export class ObservationDialogComponent {

    observation: Observation;

    constructor(
        public dialogRef: MatDialogRef<ObservationDialogComponent, Observation>,
        @Inject(MAT_DIALOG_DATA) public data: Observation
    ) {
        this.observation = data;
    }

    close(): void {
        this.dialogRef.close();
    }

    add(): void {
        this.dialogRef.close(this.observation);
    }
}

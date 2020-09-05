import { Component } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

import { AddEntityDialogComponent } from '../../../shared/components/add-entity-dialog.component';
import { TargetService } from '../../shared/target.service';
import { Target } from '../../../shared/models/models';

@Component({
    selector: 'om-add-target-dialog',
    templateUrl: './add-target-dialog.component.html',
    styleUrls: [
        './add-target-dialog.component.css'
    ],
})
export class AddTargetDialogComponent extends AddEntityDialogComponent<Target, TargetService> {
    
    constructor(
        storageService: TargetService,
        dialogRef: MatDialogRef<AddTargetDialogComponent, Target>,
    ) {
        super(storageService, dialogRef);
    }
}

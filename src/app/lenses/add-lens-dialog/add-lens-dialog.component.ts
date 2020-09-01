import { Component } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

import { LensService } from '../shared/lens.service';
import { Lens } from '../../shared/models/equipment/equipment';
import { AddEntityDialogComponent } from '../../shared/components/add-entity-dialog.component';

@Component({
    selector: 'om-add-lens-dialog',
    templateUrl: './add-lens-dialog.component.html',
    styleUrls: [
        './add-lens-dialog.component.css',
    ],
})
export class AddLensDialogComponent extends AddEntityDialogComponent<Lens, LensService> {

    constructor(
        storageService: LensService,
        dialogRef: MatDialogRef<AddLensDialogComponent, Lens>,
    ) {
        super(storageService, dialogRef);
    }

}

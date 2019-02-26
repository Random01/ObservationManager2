import { Component } from '@angular/core';

import { AddEntityDialogComponent } from '../../shared/components/add-entity-dialog.component';
import { Eyepiece } from '../../shared/models/equipment/equipment';
import { EyepieceService } from '../shared/eyepiece.service';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'om-add-eyepiece-dialog',
    templateUrl: './add-eyepiece-dialog.component.html',
    styleUrls: [
        './add-eyepiece-dialog.component.css'
    ]
})
export class AddEyepieceDialogComponent extends AddEntityDialogComponent<Eyepiece, EyepieceService> {
    constructor(
        protected service: EyepieceService,
        protected dialogRef: MatDialogRef<AddEyepieceDialogComponent, Eyepiece>
    ) {
        super(service, dialogRef);
    }
}

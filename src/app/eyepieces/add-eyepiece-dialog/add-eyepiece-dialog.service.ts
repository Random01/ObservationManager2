import { AddNewEntityDialogService } from '../../shared/services/add-new-entity-dialog.service';
import { Eyepiece } from '../../shared/models/equipment/equipment';
import { Injectable } from '@angular/core';
import { AddEyepieceDialogComponent } from './add-eyepiece-dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material';

@Injectable()
export class AddEyepieceDialogService extends AddNewEntityDialogService<Eyepiece> {

    constructor(
        protected dialog: MatDialog) {
        super(dialog);
    }

    protected createDialog(): MatDialogRef<AddEyepieceDialogComponent, Eyepiece> {
        return this.dialog.open(AddEyepieceDialogComponent, {
            width: '350px'
        });
    }

}

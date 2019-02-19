import { AddNewEntityDialogService } from '../../shared/services/add-new-entity-dialog.service';
import { Lens } from '../../shared/models/equipment/equipment';
import { LensService } from '../shared/lens.service';
import { Injectable } from '@angular/core';
import { AddLensDialogComponent } from './add-lens-dialog.component';
import { MatDialog } from '@angular/material';

@Injectable()
export class AddLensDialogService extends AddNewEntityDialogService<Lens, LensService> {

    constructor(
        protected dialog: MatDialog) {
        super(dialog);
    }

    protected createDialog() {
        return this.dialog.open(AddLensDialogComponent, {
            width: '250px'
        });
    }

}

import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { AddNewEntityDialogService } from '../../../shared/services/add-new-entity-dialog.service';
import { Target } from '../../../shared/models/models';
import { AddTargetDialogComponent } from './add-target-dialog.component';

@Injectable({ providedIn: 'root' })
export class AddTargetDialogService extends AddNewEntityDialogService<Target> {

    constructor(
        dialog: MatDialog,
    ) {
        super(dialog);
    }

    createDialog() {
        return this.dialog.open(AddTargetDialogComponent, {
            width: '350px',
        });
    }

}

import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material';

import { AddNewEntityDialogService } from '../../../shared/services/add-new-entity-dialog.service';
import { Target } from '../../../shared/models/models';
import { AddTargetDialogComponent } from './add-target-dialog.component';

@Injectable()
export class AddTargetDialogService extends AddNewEntityDialogService<Target> {

    constructor(
        protected dialog: MatDialog) {
        super(dialog);
    }

    createDialog() {
        return this.dialog.open(AddTargetDialogComponent, {
            width: '350px'
        });
    }

}

import { AddNewEntityDialogService } from '../../shared/services/add-new-entity-dialog.service';
import { Filter } from '../../shared/models/equipment/equipment';
import { Injectable } from '@angular/core';
import { AddFilterDialogComponent } from './add-filter-dialog.component';
import { MatDialog } from '@angular/material';

@Injectable()
export class AddFilterDialogService extends AddNewEntityDialogService<Filter> {

    constructor(
        protected dialog: MatDialog) {
        super(dialog);
    }

    createDialog() {
        return this.dialog.open(AddFilterDialogComponent, {
            width: '350px'
        });
    }

}

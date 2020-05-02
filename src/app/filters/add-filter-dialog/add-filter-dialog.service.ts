import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AddNewEntityDialogService } from '../../shared/services/add-new-entity-dialog.service';
import { Filter } from '../../shared/models/equipment/equipment';
import { AddFilterDialogComponent } from './add-filter-dialog.component';

@Injectable()
export class AddFilterDialogService extends AddNewEntityDialogService<Filter> {

    constructor(
        protected dialog: MatDialog) {
        super(dialog);
    }

    public createDialog() {
        return this.dialog.open(AddFilterDialogComponent, {
            width: '350px'
        });
    }

}

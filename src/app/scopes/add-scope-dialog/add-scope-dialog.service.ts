import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { AddNewEntityDialogService } from '../../shared/services/add-new-entity-dialog.service';
import { Scope } from '../../shared/models/equipment/equipment';
import { AddScopeDialogComponent } from './add-scope-dialog.component';

@Injectable()
export class AddScopeDialogService extends AddNewEntityDialogService<Scope> {

    constructor(
        protected dialog: MatDialog) {
        super(dialog);
    }

    createDialog() {
        return this.dialog.open(AddScopeDialogComponent, {
            width: '300px',
        });
    }
}

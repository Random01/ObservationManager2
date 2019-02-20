import { AddNewEntityDialogService } from '../../shared/services/add-new-entity-dialog.service';
import { Scope } from '../../shared/models/equipment/equipment';
import { ScopeService } from '../shared/scope.service';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddScopeDialogComponent } from './add-scope-dialog.component';

@Injectable()
export class AddScopeDialogService extends AddNewEntityDialogService<Scope, ScopeService> {

    constructor(
        protected dialog: MatDialog) {
        super(dialog);
    }

    createDialog() {
        return this.dialog.open(AddScopeDialogComponent, {
            width: '300px'
        });
    }
}

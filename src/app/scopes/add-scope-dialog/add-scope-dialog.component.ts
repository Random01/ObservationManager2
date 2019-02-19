import { Component } from '@angular/core';

import { MatDialogRef } from '@angular/material';
import { Scope } from '../../shared/models/equipment/equipment';
import { AddEntityDialogComponent } from '../../shared/components/add-entity-dialog.component';
import { ScopeService } from '../shared/scope.service';

@Component({
    selector: 'om-add-scope-dialog',
    templateUrl: './add-scope-dialog.component.html',
    styleUrls: [
        './add-scope-dialog.component.css'
    ]
})
export class AddScopeDialogComponent extends AddEntityDialogComponent<Scope, ScopeService> {
    constructor(
        protected scopeService: ScopeService,
        protected dialogRef: MatDialogRef<AddScopeDialogComponent, Scope>
    ) {
        super(scopeService, dialogRef);
    }
}

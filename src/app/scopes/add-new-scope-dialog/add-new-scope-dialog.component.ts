import { Component, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Scope } from '../../shared/models/equipment/equipment';

@Component({
    selector: 'om-add-new-scope-dialog',
    templateUrl: 'om-add-new-scope-dialog.component.html'
})
export class AddNewScopeDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<AddNewScopeDialogComponent, Scope>
    ) {
    }
}

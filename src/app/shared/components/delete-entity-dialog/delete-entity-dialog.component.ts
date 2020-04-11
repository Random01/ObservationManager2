import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DeleteEntityDialogOptions } from './delete-entity-dialog.service';

@Component({
    selector: 'om-delete-entity-dialog',
    templateUrl: 'delete-entity-dialog.component.html',
})
export class DeleteEntityDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<DeleteEntityDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DeleteEntityDialogOptions
    ) {
    }

    onNoClick(): void {
        this.dialogRef.close({ success: false });
    }

    onOkClick(): void {
        this.dialogRef.close({ success: true });
    }

}

import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DeleteEntityDialogOptions, DeleteEntityDialogResult } from './delete-entity-dialog.service';

@Component({
    selector: 'om-delete-entity-dialog',
    templateUrl: 'delete-entity-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteEntityDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<DeleteEntityDialogComponent, DeleteEntityDialogResult>,
        @Inject(MAT_DIALOG_DATA) public data: DeleteEntityDialogOptions,
    ) {
    }

    public onNoClick(): void {
        this.dialogRef.close({ success: false });
    }

    public onOkClick(): void {
        this.dialogRef.close({ success: true });
    }

}

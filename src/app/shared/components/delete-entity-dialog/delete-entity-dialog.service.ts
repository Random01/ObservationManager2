import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteEntityDialogComponent } from './delete-entity-dialog.component';

export interface DeleteEntityDialogResult {
    success: boolean;
}

export interface DeleteEntityDialogOptions {
    message: string;
}

@Injectable()
export class DeleteEntityDialogService {

    constructor(
        private dialog: MatDialog) {
    }

    public show(options: DeleteEntityDialogOptions): Promise<DeleteEntityDialogResult> {
        return new Promise((success) => {
            const dialogRef = this.dialog.open(DeleteEntityDialogComponent, {
                width: '250px',
                data: options,
            });

            dialogRef.afterClosed().subscribe(success);
        });
    }

}

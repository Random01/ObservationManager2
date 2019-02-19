import { StorageService } from './storage.service';
import { Entity } from '../models/models';
import { MatDialog } from '@angular/material';

export abstract class AddNewEntityDialogService<T extends Entity, S extends StorageService<T>> {

    item: T;

    constructor(
        protected dialog: MatDialog
    ) {
    }

    public openDialog(): Promise<T> {
        return new Promise((success, fail) => {
            const dialogRef = this.createDialog();
            dialogRef.afterClosed().subscribe((result: T) => {
                if (result) {
                    success(result);
                } else {
                    fail();
                }
            });
        });

    }

    protected abstract createDialog(): any;
}

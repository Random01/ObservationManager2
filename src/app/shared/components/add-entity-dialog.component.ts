import { OnInit } from '@angular/core';

import { Entity } from '../models/models';
import { StorageService } from '../services/storage.service';

export abstract class AddEntityDialogComponent<T extends Entity, S extends StorageService<T>> implements OnInit {

    item: T;

    constructor(
        protected storageService: S,
        protected dialogRef: any,
    ) {

    }

    public addItem(): void {
        if (this.item) {
            this.storageService.add(this.item).then(result => {
                this.dialogRef.close(result.payload);
            });
        }
    }

    public cancel(): void {
        this.dialogRef.close();
    }

    ngOnInit(): void {
        this.item = this.storageService.createNew();
    }

}

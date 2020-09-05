import { OnInit } from '@angular/core';

import { Entity } from '../models/models';
import { StorageService } from '../services/storage.service';

export abstract class AddEntityDialogComponent<T extends Entity, S extends StorageService<T>> implements OnInit {

    public item: T;

    constructor(
        protected readonly storageService: S,
        protected readonly dialogRef: any,
    ) { }

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

    public isValid() {
        return !!this.item?.isValid();
    }

    ngOnInit(): void {
        this.item = this.storageService.createNew();
    }

}

import { OnInit } from '@angular/core';

import { Entity } from '../models/entity.model';
import { StorageService } from '../services/storage.service';
import { BaseEntityComponent } from './base-entity.component';

export abstract class EditEntityComponent<T extends Entity> extends BaseEntityComponent<T> implements OnInit {

    constructor(protected storageService: StorageService<T>) {
        super();
    }

    public updateItem() {
        this.startLoading();
        this.storageService.update(this.item).then(() => {
            this.endLoading();
            this.goBack();
        });
    }

    public abstract goBack(): void;

    protected abstract getItemId(): string;

    ngOnInit(): void {
        this.startLoading();
        this.storageService.getById(this.getItemId()).then(loadedItem => {
            this.endLoading();
            this.item = loadedItem;
        });
    }

    public isValid(): boolean {
        return this.item != null && this.item.isValid();
    }

}

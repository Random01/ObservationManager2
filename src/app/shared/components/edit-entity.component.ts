import { OnInit } from '@angular/core';

import { Entity } from '../models/entity.model';
import { StorageService } from '../services/storage.service';
import { BaseEntityComponent } from './base-entity.component';

export abstract class EditEntityComponent<T extends Entity> extends BaseEntityComponent<T> implements OnInit {

    constructor(protected storageService: StorageService<T>) {
        super();
    }

    public async updateItem() {
        this.startLoading();
        try {
            await this.storageService.update(this.item);
            this.goBack();
        } finally {
            this.endLoading();
        }
    }

    public abstract goBack(): void;

    protected abstract getItemId(): string;

    ngOnInit(): void {
        this.startLoading();
        this.storageService.getById(this.getItemId())
            .then(loadedItem => this.item = loadedItem)
            .then(() => this.endLoading());
    }

    public isValid(): boolean {
        return this.item != null && this.item.isValid();
    }

}

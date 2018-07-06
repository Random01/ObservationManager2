import { OnInit } from '@angular/core';

import { BaseComponent } from './base-component';

import { Entity } from '../models/models';
import { StorageService } from '../services/storage.service';

export abstract class EntityListComponent<T extends Entity> extends BaseComponent implements OnInit {

    items: T[];
    isLoading: Boolean;

    public startLoading() {
        this.isLoading = true;
    }

    public endLoading() {
        this.isLoading = false;
    }

    constructor(protected storageService: StorageService<T>) {
        super();
    }

    loadAllItems(): Promise<void> {
        this.startLoading();
        return this.storageService
            .getAll()
            .then(loadedItem => {
                this.endLoading();
                this.items = loadedItem;
            });
    }

    remove(entity: any) {
        this.startLoading();
        return this.storageService.delete(entity._id)
            .then(() => this.loadAllItems());
    }

    ngOnInit(): void {
        this.loadAllItems();
    }

}

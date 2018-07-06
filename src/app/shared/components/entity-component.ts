import { OnInit } from '@angular/core';

import { BaseComponent } from './base-component';
import { StorageService } from '../services/storage.service';
import { Entity } from '../models/entity.model';

export abstract class EntityComponent<T extends Entity> extends BaseComponent implements OnInit {

    selectedItem: T;
    items: T[];
    isLoading: Boolean;

    constructor(protected storageService: StorageService<T>) {
        super();
    }

    loadAllItems(): void {
        this.storageService
            .getAll()
            .then(x => this.items = x);
    }

    createNew(): void {
        this.selectedItem = this.storageService.createNew();
    }

    addNewItem(): void {
        if (this.selectedItem != null) {
            this.isLoading = true;
            this.storageService.add(this.selectedItem).then(() => {
                this.isLoading = false;
            });
        }
    }

    updateItem(): void {
        if (this.selectedItem != null && this.selectedItem.isValid()) {
            this.isLoading = true;
            this.storageService.update(this.selectedItem).then(() => {
                this.isLoading = false;
            });
        }
    }

    onSelect(item: T) {
        this.selectedItem = item;
    }

    ngOnInit(): void {
        this.loadAllItems();
    }

    removeItem(item: any): void {
        this.storageService.delete(item._id).then();
    }

}

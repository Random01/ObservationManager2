import { OnInit } from '@angular/core';

import { BaseComponent } from './base-component';
import { StorageService } from '../services/storage.service';
import { Entity } from '../models/entity.model';

export class EntityComponent<T extends Entity> extends BaseComponent implements OnInit {

    selectedItem: T;
    items: T[];

    constructor(protected storageService: StorageService<T>) {
        super();
    }

    loadAllItems(): void {
        this.storageService
            .getAll()
            .then(x => this.items = x);
    }

    createNew(): void {
        this.selectedItem = {} as T;
    }

    addNewItem(): void {
        if (this.selectedItem != null) {
            this.storageService.add(this.selectedItem);
        }
    }

    onSelect(item: T) {
        this.selectedItem = item;
    }

    ngOnInit(): void {
        this.loadAllItems();
    }
}

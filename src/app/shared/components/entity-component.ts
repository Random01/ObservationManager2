import { OnInit } from '@angular/core';

import { BaseComponent } from './base-component';
import { StorageService } from '../services/storage.service';
import { Entity } from '../models/entity.model';
import { AppContextService } from '../services/app-context.service';

export abstract class EntityComponent<T extends Entity> extends BaseComponent implements OnInit {

    public selectedItem: T;
    public items: T[];

    constructor(
        protected storageService: StorageService<T>,
        appContext: AppContextService,
    ) {
        super(appContext);
    }

    public loadAllItems(): void {
        this.storageService
            .getAll()
            .then(x => this.items = x);
    }

    public createNew(): void {
        this.selectedItem = this.storageService.createNew();
    }

    public addNewItem(): void {
        if (this.selectedItem != null) {
            this.isLoading = true;
            this.storageService.add(this.selectedItem).then(() => {
                this.isLoading = false;
            });
        }
    }

    public updateItem(): void {
        if (this.selectedItem != null && this.selectedItem.isValid()) {
            this.isLoading = true;
            this.storageService.update(this.selectedItem).then(() => {
                this.isLoading = false;
            });
        }
    }

    public onSelect(item: T) {
        this.selectedItem = item;
    }

    public ngOnInit(): void {
        this.loadAllItems();
    }

    public removeItem(item: any): void {
        this.storageService.delete(item._id).then();
    }

}

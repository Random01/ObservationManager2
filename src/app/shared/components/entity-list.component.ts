import { OnInit } from '@angular/core';

import { BaseComponent } from './base-component';

import { Entity } from '../models/models';
import { StorageService } from '../services/storage.service';

export abstract class EntityListComponent<T extends Entity> extends BaseComponent implements OnInit {

    items: T[];
    isLoading: Boolean;
    currentPage = 0;
    pageSize = 10;
    totalCount = 0;

    public startLoading() {
        this.isLoading = true;
    }

    public endLoading() {
        this.isLoading = false;
    }

    constructor(protected storageService: StorageService<T>) {
        super();
    }

    async loadItems(): Promise<void> {
        this.startLoading();

        const response = await this.storageService.getItems({
            size: this.pageSize,
            page: this.currentPage
        });

        this.items = response.items;
        this.totalCount = response.totalCount;

        this.endLoading();
    }

    async remove(entity: any) {
        this.startLoading();
        await this.storageService.delete(entity.id);
        return this.loadItems();
    }

    ngOnInit(): void {
        this.loadItems();
    }

    onPageChanged(pageEvent: any) {
        this.currentPage = pageEvent.pageIndex;
        this.pageSize = pageEvent.pageSize;
        this.loadItems();
    }

}

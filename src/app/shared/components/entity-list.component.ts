import { OnInit } from '@angular/core';

import { BaseComponent } from './base-component';

import { Entity } from '../models/models';
import { StorageService } from '../services/storage.service';
import { SortOrder } from '../models/sort-order.model';
import { DeleteEntityDialogService } from './delete-entity-dialog/delete-entity-dialog.service';
import { RequestParams } from '../services/request-params.model';

export abstract class EntityListComponent<T extends Entity> extends BaseComponent implements OnInit {

    items: T[];
    isLoading: Boolean;
    currentPage = 0;
    pageSize = 10;
    totalCount = 0;
    sortField?: string;
    sortDirection?: SortOrder;

    public startLoading() {
        this.isLoading = true;
    }

    public endLoading() {
        this.isLoading = false;
    }

    constructor(
        protected storageService: StorageService<T>,
        protected deleteEntityDialogService: DeleteEntityDialogService) {
        super();
    }

    async loadItems(): Promise<void> {
        this.startLoading();

        const response = await this.storageService.getItems(
            new RequestParams({
                size: this.pageSize,
                page: this.currentPage,
                sortDirection: this.sortDirection,
                sortField: this.sortField
            }));

        this.items = response.items;
        this.totalCount = response.totalCount;

        this.endLoading();
    }

    async remove(entity: any) {
        const result = await this.deleteEntityDialogService.show({
            message: 'Are you sure?'
        });

        if (result.success) {
            this.startLoading();
            await this.storageService.delete(entity.id);
            return this.loadItems();
        }
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

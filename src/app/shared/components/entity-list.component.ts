import { OnInit } from '@angular/core';

import { Entity } from '../models/models';
import { StorageService } from '../services/storage.service';
import { DeleteEntityDialogService } from './delete-entity-dialog/delete-entity-dialog.service';
import { PaginatedListComponent } from './paginated-list.component';

export abstract class EntityListComponent<T extends Entity> extends PaginatedListComponent<T> implements OnInit {

    constructor(
        protected storageService: StorageService<T>,
        protected deleteEntityDialogService: DeleteEntityDialogService) {
        super();
    }

    async loadItems(): Promise<void> {
        this.startLoading();

        const requestParams = this.getRequestParams();

        requestParams.size = this.pageSize;
        requestParams.page = this.currentPage;
        requestParams.sortDirection = this.sortDirection;
        requestParams.sortField = this.sortField;

        const response = await this.storageService.getItems(requestParams);

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

}

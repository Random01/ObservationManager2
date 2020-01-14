import { OnInit } from '@angular/core';

import { Entity } from '../models/models';
import { StorageService } from '../services/storage.service';
import { DeleteEntityDialogService } from './delete-entity-dialog/delete-entity-dialog.service';
import { PaginatedListComponent } from './paginated-list.component';
import { ActivatedRoute, Router } from '@angular/router';

import { saveAs } from 'file-saver';

export abstract class EntityListComponent<T extends Entity> extends PaginatedListComponent<T> implements OnInit {

    constructor(
        protected storageService: StorageService<T>,
        protected deleteEntityDialogService: DeleteEntityDialogService,
        protected route: ActivatedRoute,
        protected router: Router) {
        super(route, router);
    }

    async loadItems(): Promise<void> {
        this.startLoading();

        const requestParams = this.getRequestParams();

        requestParams.size = this.pageSize;
        requestParams.page = this.currentPage;
        requestParams.sortDirection = this.sortDirection;
        requestParams.sortField = this.sortField;

        try {
            const response = await this.storageService.getItems(requestParams);

            this.items = response.items;
            this.totalCount = response.totalCount;
        } finally {
            this.endLoading();
        }
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

    protected getExportFileName(): string {
        return 'items';
    }

    async exportToCsv() {
        this.startLoading();

        const request = this.getRequestParams();

        request.page = 0;
        request.size = 100;

        try {
            saveAs(await this.storageService.exportItems(request), this.getExportFileName() + '.csv');
        } finally {
            this.endLoading();
        }
    }
}

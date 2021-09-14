import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { saveAs } from 'file-saver';

import { Entity } from '../models/models';
import { StorageService } from '../services/storage.service';
import { DeleteEntityDialogService } from './delete-entity-dialog/delete-entity-dialog.service';
import { PaginatedListComponent } from './paginated-list.component';
import { AppContextService } from '../services/app-context.service';

export abstract class EntityListComponent<T extends Entity> extends PaginatedListComponent<T> implements OnInit {

    constructor(
        protected readonly storageService: StorageService<T>,
        protected readonly deleteEntityDialogService: DeleteEntityDialogService,
        route: ActivatedRoute,
        router: Router,
        appContext: AppContextService,
    ) {
        super(route, router, appContext);
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
            message: 'Are you sure?',
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
        return this.export('.csv');
    }

    protected async export(type = '.csv') {
        this.startLoading();

        const request = this.getRequestParams();

        request.page = 0;
        request.size = 100;

        try {
            saveAs(await this.storageService.exportItems(request), this.getExportFileName() + type);
        } catch (error) {
            this.appContext.messageService.error('Unable to export');
            this.appContext.logger.error(error);
        } finally {
            this.endLoading();
        }
    }
}

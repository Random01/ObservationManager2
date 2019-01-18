import { BaseComponent } from './base-component';
import { SortOrder } from '../models/sort-order.model';
import { RequestParams } from '../services/request-params.model';
import { OnInit } from '@angular/core';

export abstract class PaginatedListComponent<T> extends BaseComponent implements OnInit {

    items: T[];
    isLoading: Boolean;
    currentPage = 0;
    pageSize = 10;
    pageSizeOptions = [5, 10];
    totalCount = 0;
    sortField?: string;
    sortDirection?: SortOrder;

    protected getRequestParams(): RequestParams {
        return new RequestParams();
    }

    async loadItems(): Promise<void> {

    }

    onPageChanged(pageEvent: any) {
        this.currentPage = pageEvent.pageIndex;
        this.pageSize = pageEvent.pageSize;
        this.loadItems();
    }

    ngOnInit(): void {
        this.loadItems();
    }
}

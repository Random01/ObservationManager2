import { BaseComponent } from './base-component';
import { SortOrder } from '../models/sort-order.model';
import { RequestParams } from '../services/request-params.model';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export abstract class PaginatedListComponent<T> extends BaseComponent implements OnInit {

    items: T[];
    isLoading: Boolean;
    currentPage = 0;
    pageSize = 10;
    pageSizeOptions = [5, 10];
    totalCount = 0;
    sortField?: string;
    sortDirection?: SortOrder;

    constructor(
        protected route: ActivatedRoute,
        protected router: Router
    ) {
        super();
    }

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

    goToPage(pageNum) {
        this.router.navigate(['/product-list'], { queryParams: { page: pageNum } });
    }

    ngOnInit(): void {
        this.loadItems();
    }
}

import { OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { BaseComponent } from './base-component';
import { SortOrder } from '../models/sort-order.model';
import { RequestParams } from '../services/request-params.model';

import PageChangedEvent from '../interfaces/page-change-event.interface';
import PaginatedListQueryParams from '../interfaces/paginated-list-query-params.interface';
import { AppContextService } from '../services/app-context.service';

export abstract class PaginatedListComponent<T> extends BaseComponent implements OnInit {

    public items: T[] = [];
    public currentPage = 0;
    public pageSize = 10;
    public pageSizeOptions = [5, 10];
    public totalCount = 0;
    public sortField: string | null = null;
    public sortDirection: SortOrder | null = null;

    constructor(
        protected readonly route: ActivatedRoute,
        protected readonly router: Router,
        appContext: AppContextService,
    ) {
        super(appContext);
    }

    protected getRequestParams(params?: Partial<RequestParams>): RequestParams {
        return new RequestParams(params);
    }

    async loadItems(): Promise<void> {

    }

    onPageChanged(pageEvent: PageChangedEvent) {
        this.currentPage = pageEvent.pageIndex;
        this.pageSize = pageEvent.pageSize;

        this.goToPage({ page: pageEvent.pageIndex, size: pageEvent.pageSize });
    }

    goToPage(params: PaginatedListQueryParams) {
        this.router.navigate([], { queryParams: params });
    }

    public ngOnInit(): void {
        this.handle(
            this.route
                .queryParams
                .subscribe(params => {
                    this.currentPage = +params['page'] || 0;
                    this.pageSize = +params['size'] || 10;

                    this.loadItems();
                })
        );
    }

    public ngOnDestroy(): void {
        this.destroy();
    }
}

import { OnInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PageEvent } from '@angular/material/paginator';

import { BehaviorSubject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DestroyRef, inject } from '@angular/core';

import { BaseComponent } from './base-component';
import { SortOrder } from '../models/sort-order.model';
import { RequestParams } from '../services/request-params.model';

import PaginatedListQueryParams from '../interfaces/paginated-list-query-params.interface';
import { PaginatedResponsePayload } from '../interfaces/paginated-response-payload.interface';

@Component({
  template: '',
  standalone: false,
})
export abstract class PaginatedListComponent<T> extends BaseComponent implements OnInit {
  protected readonly itemsSubject$ = new BehaviorSubject<PaginatedResponsePayload<T>>({
    items: [],
    pageCount: 0,
    pages: 0,
    totalCount: 0,
  });
  public readonly page$ = this.itemsSubject$.asObservable();

  public currentPage = 0;
  public pageSize = 10;
  public pageSizeOptions = [5, 10];
  public sortField: string | null = null;
  public sortDirection: SortOrder | null = null;

  protected readonly destroyRef = inject(DestroyRef);
  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly router: Router,
  ) {
    super();
  }

  public abstract loadItems(): Promise<void>;

  public onPageChanged(pageEvent: PageEvent) {
    this.currentPage = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;

    this.goToPage({
      page: pageEvent.pageIndex,
      size: pageEvent.pageSize,
    });
  }

  public goToPage(params: PaginatedListQueryParams) {
    this.router.navigate([], { queryParams: params });
  }

  public ngOnInit(): void {
    this.route.queryParams
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => {
        this.currentPage = +params['page'] || 0;
        this.pageSize = +params['size'] || 10;
        this.loadItems();
      });
  }

  protected getRequestParams(params?: Partial<RequestParams>): RequestParams {
    return new RequestParams(params);
  }
}

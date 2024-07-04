import { Injectable } from '@angular/core';

import { Observable, concatMap, finalize, tap } from 'rxjs';

import { ComponentStore } from '@ngrx/component-store';

import { AdminComponentState } from './base-admin-component-state.interface';
import { BaseEntityService } from './base-entity.service';

import { PaginatedItems } from '../../../../api/routers/common';

@Injectable()
export class BaseAdminComponentStore<T = any> extends ComponentStore<AdminComponentState<T>> {

  public readonly items$ = this.select(state => state.items);

  public readonly currentPage$ = this.select(state => state.currentPage);

  public readonly pageSize$ = this.select(state => state.pageSize);

  public readonly fetchItemsData$ = this.select({
    pageSize: this.pageSize$,
    currentPage: this.currentPage$,
  }, { debounce: true });

  public readonly tableConfig$ = this.select(state => ({
    displayedColumns: state.displayedColumns,
    pageSizeOptions: state.pageSizeOptions,
  }));

  public readonly isLoading$ = this.select(state => state.isLoading);

  constructor(private readonly entityService: BaseEntityService) {
    super({
      items: [],
      isLoading: false,
      currentPage: 0,
      displayedColumns: [],
      pageSize: 5,
      pageSizeOptions: [5, 10],
      totalCount: 0,
    });

    this.fetchItems(this.fetchItemsData$);
  }

  private readonly fetchItems = this.effect(
    (itemsPageData$: Observable<{ pageSize: number; currentPage: number }>) => itemsPageData$.pipe(
      tap(() => this.updateLoading(true)),
      concatMap(({ pageSize, currentPage }) =>
        this.entityService.getItems({ currentPage, pageSize }).pipe(
          tap(result => this.updateItemsResult(result)),
          finalize(() => this.updateLoading(false))
        )),
    )
  );

  private readonly updateItemsResult = this.updater((state, result: PaginatedItems<T>) => ({
    ...state,
    totalCount: result.totalCount,
    items: result.items,
  }));

  private readonly updateLoading = this.updater((state, isLoading: boolean) => ({
    ...state,
    isLoading,
  }));

}

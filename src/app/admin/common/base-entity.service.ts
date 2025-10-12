import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { PaginatedItems } from '../../../../api/routers/common';

@Injectable()
export abstract class BaseEntityService<T = any> {
  public abstract getItems(request: { currentPage: number; pageSize: number }): Observable<PaginatedItems<T>>;
}

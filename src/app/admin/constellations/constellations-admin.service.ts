import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { BaseEntityService } from '../common/base-entity.service';
import { PaginatedItems } from '../../../../api/routers/common';

interface ConstellationEntity {
  name: string;
}

@Injectable()
export class ConstellationsAdminService extends BaseEntityService<ConstellationEntity> {
  public override getItems(_request: { currentPage: number; pageSize: number }): Observable<PaginatedItems<ConstellationEntity>> {
    return of({
      items: [{ name: 'Item #1' }, { name: 'Item #2' }],
      pageCount: 2,
      pages: 1,
      totalCount: 2,
    } as PaginatedItems<ConstellationEntity>);
  }
}

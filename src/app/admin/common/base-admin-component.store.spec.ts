import { filter, firstValueFrom, Subject } from 'rxjs';

import type { PaginatedItems } from '../../../../api/routers/common';
import { BaseAdminComponentStore } from './base-admin-component.store';
import { BaseEntityService } from './base-entity.service';

describe('BaseAdminComponentStore', () => {
  it('fetches the initial page and refetches when paging changes', async () => {
    const requests = new Subject<{ currentPage: number; pageSize: number }>();
    const responses = [new Subject<PaginatedItems<string>>(), new Subject<PaginatedItems<string>>()];
    const service = jasmine.createSpyObj<BaseEntityService<string>>('BaseEntityService', ['getItems']);
    service.getItems.and.callFake((request) => {
      requests.next(request);
      return responses[request.currentPage];
    });
    const initialRequest = firstValueFrom(requests);
    const store = new BaseAdminComponentStore<string>(service);

    try {
      expect(await initialRequest).toEqual({ currentPage: 0, pageSize: 5 });
      expect(await firstValueFrom(store.isLoading$)).toBeTrue();
      const initialItems = firstValueFrom(store.items$.pipe(filter((items) => items.length > 0)));
      responses[0].next({ items: ['M31'], totalCount: 2, pageCount: 0, pages: 2 });
      responses[0].complete();
      expect(await initialItems).toEqual(['M31']);
      expect(await firstValueFrom(store.isLoading$)).toBeFalse();
      expect(await firstValueFrom(store.tableConfig$)).toEqual({ displayedColumns: [], pageSizeOptions: [5, 10] });

      const nextRequest = firstValueFrom(requests);
      store.patchState({ currentPage: 1, pageSize: 10 });
      expect(await nextRequest).toEqual({ currentPage: 1, pageSize: 10 });
      responses[1].next({ items: ['M32'], totalCount: 2, pageCount: 1, pages: 2 });
      responses[1].complete();
      expect(await firstValueFrom(store.items$)).toEqual(['M32']);
      expect(await firstValueFrom(store.isLoading$)).toBeFalse();
    } finally {
      store.ngOnDestroy();
    }
  });
});

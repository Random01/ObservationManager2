import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';
import { MessageService } from '../../shared/services/message.service';
import { ObservationService } from '../shared/observation.service';
import { ObservationsComponent } from './observations.component';

describe('ObservationsComponent', () => {
  it('applies the selected filters and fetches unfiltered results when search is cleared', async () => {
    const getItems = jasmine.createSpy<ObservationService['getItems']>('getItems').and.resolveTo({
      items: [],
      pageCount: 0,
      pages: 0,
      totalCount: 0,
    });
    TestBed.configureTestingModule({
      providers: [
        { provide: ObservationService, useValue: { getItems } },
        { provide: ActivatedRoute, useValue: {} },
        { provide: Router, useValue: {} },
        { provide: MessageService, useValue: {} },
        { provide: DeleteEntityDialogService, useValue: {} },
      ],
    });
    const component = TestBed.runInInjectionContext(() => new ObservationsComponent(TestBed.inject(ObservationService)));
    const filters = await firstValueFrom(component.searchParameters$);
    const startDate = new Date(2026, 9, 1);
    Object.assign(filters, { startDate });
    component.search();
    component.clearSearch();

    expect(getItems.calls.allArgs().map(([request]) => request.getQueryString())).toEqual([`page=0&size=10&startDate=${startDate}`, 'page=0&size=10']);
  });
});

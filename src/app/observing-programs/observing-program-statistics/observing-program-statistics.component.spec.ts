import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { filter, firstValueFrom, of } from 'rxjs';

import { MessageService } from '../../shared/services/message.service';
import ObservingProgramStatistics from '../shared/observing-program-statistics.model';
import { ObservingProgramsService } from '../shared/observing-programs.service';
import { TargetStatistics } from '../shared/target-statistics.model';
import { ObservingProgramStatisticsComponent } from './observing-program-statistics.component';

describe('ObservingProgramStatisticsComponent', () => {
  it('loads overall and paginated statistics for the program in the route', async () => {
    const overall = new ObservingProgramStatistics({ totalCount: 6, observedCount: 2 });
    const page = { items: [new TargetStatistics()], totalCount: 6, pageCount: 1, pages: 2 };
    const service = jasmine.createSpyObj<ObservingProgramsService>('ObservingProgramsService', ['getStatistics', 'getObservingProgramStatistics']);
    service.getStatistics.and.resolveTo(page);
    service.getObservingProgramStatistics.and.resolveTo(overall);
    const router = jasmine.createSpyObj<Router>('Router', ['navigate']);
    TestBed.configureTestingModule({
      providers: [
        { provide: ObservingProgramsService, useValue: service },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: convertToParamMap({ programId: 'program-1' }) }, queryParams: of({ page: '1', size: '5' }) } },
        { provide: Router, useValue: router },
        { provide: MessageService, useValue: {} },
      ],
    });
    const component = TestBed.runInInjectionContext(() => new ObservingProgramStatisticsComponent());
    component.ngOnInit();

    expect(await firstValueFrom(component.statistics$.pipe(filter(Boolean)))).toBe(overall);
    expect(await firstValueFrom(component.page$)).toBe(page);
    expect(service.getObservingProgramStatistics).toHaveBeenCalledOnceWith('program-1');
    expect(service.getStatistics).toHaveBeenCalledOnceWith(jasmine.objectContaining({ observingProgramId: 'program-1', page: 1, size: 5 }));
    component.goBack();
    expect(router.navigate).toHaveBeenCalledOnceWith(['/observing-programs']);
  });
});

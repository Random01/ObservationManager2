import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { environment } from '../../../environments/environment';
import { JwtService } from '../../auth/shared/jwt.service';
import { ObservingProgramStatisticsRequestParams } from './observing-program-statistics-request-params.model';
import { ObservingProgramsService } from './observing-programs.service';

describe('ObservingProgramsService', () => {
  const url = `${environment.omServiceEndpoint}/observing-programs`;
  let service: ObservingProgramsService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting(), { provide: JwtService, useValue: { getToken: () => 'test-token' } }],
    });
    service = TestBed.inject(ObservingProgramsService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('maps a page of target statistics and treats missing observations as unobserved', async () => {
    const response = service.getStatistics(new ObservingProgramStatisticsRequestParams({ observingProgramId: 'program-1', page: 0, size: 5 }));
    const request = http.expectOne({ method: 'GET', url: `${url}/statistics/program-1?page=0&size=5&id=program-1` });
    expect(request.request.headers.get('Authorization')).toBe('test-token');
    request.flush({ pageCount: 0, pages: 1, totalCount: 2, items: [{ target: { name: 'M31' }, observations: [{ id: 'observation-1' }] }, { target: { name: 'M32' } }] });

    const page = await response;
    expect(page.totalCount).toBe(2);
    expect(page.items.map(({ target, observed }) => [target.name, observed])).toEqual([
      ['M31', true],
      ['M32', false],
    ]);
  });

  it('calculates completeness from the overall counts, including empty programs', async () => {
    for (const { totalCount, observedCount, expected } of [
      { totalCount: 8, observedCount: 2, expected: 0.25 },
      { totalCount: 0, observedCount: 0, expected: 0 },
    ]) {
      const response = service.getObservingProgramStatistics('program-1');
      http.expectOne({ method: 'GET', url: `${url}/overall-statistics/program-1` }).flush({ totalCount, observedCount });
      expect((await response).getCompleteness()).toBe(expected);
    }
  });
});

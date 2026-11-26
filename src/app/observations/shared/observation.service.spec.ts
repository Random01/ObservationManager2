import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { environment } from '../../../environments/environment';
import { Observation } from '../../shared/models/observation.model';
import { ObservationService } from './observation.service';

describe('ObservationService', () => {
  it('requests the first page for a session and returns deserialized observations', async () => {
    TestBed.configureTestingModule({ providers: [provideHttpClient(), provideHttpClientTesting()] });
    const service = TestBed.inject(ObservationService);
    const http = TestBed.inject(HttpTestingController);
    const result = service.getSessionObservations('session-1');
    http.expectOne({ method: 'GET', url: `${environment.omServiceEndpoint}/observations?page=0&size=10&session=session-1` }).flush({
      items: [{ _id: 'observation-1', session: 'session-1' }],
      pageCount: 0,
      pages: 1,
      totalCount: 1,
    });

    const [item] = (await result).items;
    expect(item instanceof Observation).toBeTrue();
    expect(item.id).toBe('observation-1');
    expect(item.session.id).toBe('session-1');
    http.verify();
  });
});

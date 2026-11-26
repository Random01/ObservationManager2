import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Target } from '../../shared/models/target.model';
import { TargetService } from './target.service';

describe('TargetService', () => {
  let service: TargetService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideHttpClient(), provideHttpClientTesting()] });
    service = TestBed.inject(TargetService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('skips the HTTP request for blank searches', async () => {
    expect(await firstValueFrom(service.search({ name: '  ', maxCount: 10 }))).toEqual([]);
  });

  it('trims the query and maps the plain array returned by autocomplete', async () => {
    const result = firstValueFrom(service.search({ name: ' M31 ', maxCount: 5 }));
    http.expectOne({ method: 'GET', url: `${environment.omServiceEndpoint}/targets?name=M31&maxCount=5` }).flush([{ _id: 'm31', name: 'M31' }]);

    const [target] = await result;
    expect(target instanceof Target).toBeTrue();
    expect(target.id).toBe('m31');
    expect(target.name).toBe('M31');
  });
});

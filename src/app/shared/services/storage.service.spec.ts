import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { environment } from '../../../environments/environment';
import { JwtService } from '../../auth/shared/jwt.service';
import { Entity } from '../models/entity.model';
import { ExportType } from '../models/export-type.model';
import { ExportRequestParams } from './export-request-params.model';
import { RequestParams } from './request-params.model';
import { ResponseStatus } from './response-status.model';
import { StorageService } from './storage.service';

class TestStorageService extends StorageService<Entity> {
  constructor() {
    super('/entities', Entity);
  }
}

describe('StorageService', () => {
  const url = `${environment.omServiceEndpoint}/entities`;
  let service: TestStorageService;
  let http: HttpTestingController;
  let getToken: jasmine.Spy;

  beforeEach(() => {
    getToken = jasmine.createSpy('getToken').and.returnValue('test-token');
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting(), { provide: JwtService, useValue: { getToken } }],
    });
    service = TestBed.runInInjectionContext(() => new TestStorageService());
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('requests the first page and maps records while retaining pagination metadata', async () => {
    const result = service.getItems(new RequestParams({ page: 0, size: 2 }));
    const request = http.expectOne({ method: 'GET', url: `${url}?page=0&size=2` });
    expect(request.request.headers.get('Authorization')).toBe('test-token');
    request.flush({ items: [{ _id: 'one' }, { _id: 'two' }], pageCount: 0, pages: 3, totalCount: 5 });

    const page = await result;
    expect(page).toEqual({ items: [jasmine.any(Entity), jasmine.any(Entity)], pageCount: 0, pages: 3, totalCount: 5 });
    expect(page.items.map((item) => item.id)).toEqual(['one', 'two']);
  });

  it('returns the recent records without pagination metadata', async () => {
    const result = service.getRecent();
    http.expectOne({ method: 'GET', url: `${url}?` }).flush({ items: [{ _id: 'one' }] });
    expect((await result).map((item) => item.id)).toEqual(['one']);
  });

  it('reads an individual record without authorization when no token is stored', async () => {
    getToken.and.returnValue(null);
    const result = firstValueFrom(service.getById('one'));
    const request = http.expectOne({ method: 'GET', url: `${url}/one` });
    expect(request.request.headers.has('Authorization')).toBeFalse();
    request.flush({ _id: 'one', description: 'Observation notes' });
    const entity = await result;
    expect(entity instanceof Entity).toBeTrue();
    expect(entity.description).toBe('Observation notes');
  });

  it('posts serialized JSON and returns the saved record', async () => {
    const result = firstValueFrom(service.add(new Entity({ description: 'Observation notes' })));
    const request = http.expectOne({ method: 'POST', url });
    expect(request.request.headers.get('Content-Type')).toBe('application/json');
    expect(request.request.body).toEqual({ id: undefined, description: 'Observation notes' });
    request.flush({ _id: 'one', description: 'Observation notes' });

    const saved = await result;
    expect(saved.status).toBe(ResponseStatus.Ok);
    expect(saved.payload).toEqual(jasmine.objectContaining({ id: 'one', description: 'Observation notes' }));
  });

  it('rejects an empty entity before making a request', () => {
    expect(() => service.add(null)).toThrowError('newItem should be provided');
  });

  it('updates the selected entity with its serialized fields', async () => {
    const result = firstValueFrom(service.update(new Entity({ id: 'one', description: 'Revised notes' })));
    const request = http.expectOne({ method: 'PUT', url: `${url}/one` });
    expect(request.request.body).toEqual({ id: 'one', description: 'Revised notes' });
    request.flush(null, { status: 204, statusText: 'No Content' });
    expect(await result).toBeTrue();
  });

  it('returns false when an update is rejected', async () => {
    const result = firstValueFrom(service.update(new Entity({ id: 'one' })));
    http.expectOne({ method: 'PUT', url: `${url}/one` }).flush(null, { status: 409, statusText: 'Conflict' });
    expect(await result).toBeFalse();
  });

  it('deletes the selected record and returns the server result', async () => {
    const result = firstValueFrom(service.delete('one'));
    http.expectOne({ method: 'DELETE', url: `${url}/one` }).flush(true);
    expect(await result).toBeTrue();
  });

  it('requests a downloadable blob with the selected export type', async () => {
    const file = new Blob(['name\nM31'], { type: 'text/csv' });
    const result = service.exportItems(new ExportRequestParams({ exportType: ExportType.CSV }));
    const request = http.expectOne({ method: 'GET', url: `${url}/export?exportType=csv` });
    expect(request.request.responseType).toBe('blob');
    request.flush(file);
    expect(await result).toBe(file);
  });
});

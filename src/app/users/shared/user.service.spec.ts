import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { environment } from '../../../environments/environment';
import { JwtService } from '../../auth/shared/jwt.service';
import { User } from '../../shared/models/user.model';
import { UserService } from './user.service';

describe('UserService', () => {
  const url = `${environment.omServiceEndpoint}/users`;
  const user = { userName: 'observer', email: 'observer@example.test', token: 'new-token' };
  let service: UserService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting(), { provide: JwtService, useValue: { getToken: () => 'stored-token' } }],
    });
    service = TestBed.inject(UserService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('posts credentials and maps the returned user and token', async () => {
    const result = firstValueFrom(service.authenticate(user.email, 'test-password'));
    const request = http.expectOne({ method: 'POST', url: `${url}/login` });
    expect(request.request.body).toEqual({ user: { userName: user.email, password: 'test-password' } });
    request.flush({ user });

    const payload = await result;
    expect(payload.token).toBe(user.token);
    expect(payload.user instanceof User).toBeTrue();
    expect(payload.user.email).toBe(user.email);
  });

  it('sends the stored token to restore the current user', async () => {
    const result = firstValueFrom(service.getUser());
    const request = http.expectOne({ method: 'GET', url: `${url}/user` });
    expect(request.request.headers.get('Authorization')).toBe('stored-token');
    request.flush({ user });
    expect((await result).user.userName).toBe(user.userName);
  });

  it('posts the registration data to the users endpoint', async () => {
    const registration = new User({ userName: user.userName, email: user.email, password: 'test-password' });
    const result = firstValueFrom(service.register(registration));
    const request = http.expectOne({ method: 'POST', url: `${url}/` });
    expect(request.request.body).toBe(registration);
    request.flush(null, { status: 204, statusText: 'No Content' });
    await result;
  });
});

import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { firstValueFrom, of, Subject, throwError } from 'rxjs';

import { Scope } from '../../shared/models/equipment/scope.model';
import { MessageService } from '../../shared/services/message.service';
import { ScopeService } from '../shared/scope.service';
import { EditScopeComponent } from './edit-scope.component';

describe('EditScopeComponent', () => {
  const scope = new Scope({ id: 'scope-1', model: 'Reflector' });
  let component: EditScopeComponent;
  let service: jasmine.SpyObj<ScopeService>;
  let router: jasmine.SpyObj<Router>;
  let messages: jasmine.SpyObj<MessageService>;

  beforeEach(() => {
    service = jasmine.createSpyObj<ScopeService>('ScopeService', ['getById', 'update']);
    service.getById.and.returnValue(of(scope));
    router = jasmine.createSpyObj<Router>('Router', ['navigateByUrl']);
    messages = jasmine.createSpyObj<MessageService>('MessageService', ['error']);
    TestBed.configureTestingModule({
      providers: [
        { provide: ScopeService, useValue: service },
        { provide: Router, useValue: router },
        { provide: MessageService, useValue: messages },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: convertToParamMap({ id: scope.id }), queryParams: { returnUrl: '/scopes' } } } },
      ],
    });
    component = TestBed.runInInjectionContext(() => new EditScopeComponent(TestBed.inject(ScopeService)));
  });

  it('loads the scope identified by the route and validates the loaded item', async () => {
    component.ngOnInit();

    expect(service.getById).toHaveBeenCalledOnceWith(scope.id);
    expect(await firstValueFrom(component.item$)).toBe(scope);
    expect(component.isValid()).toBeTrue();
    expect(component.isLoading()).toBeFalse();
  });

  it('reports a load failure and clears the loading state', async () => {
    service.getById.and.returnValue(throwError(() => new Error('Scope unavailable')));
    component.ngOnInit();

    expect(await firstValueFrom(component.item$)).toBeNull();
    expect(messages.error).toHaveBeenCalledWith('Unable to load items');
    expect(component.isLoading()).toBeFalse();
  });

  it('saves the loaded scope and navigates to the return URL once the save completes', () => {
    const response = new Subject<boolean>();
    service.update.and.returnValue(response);
    component.ngOnInit();

    component.updateItem();

    expect(service.update).toHaveBeenCalledOnceWith(scope);
    expect(component.isLoading()).toBeTrue();
    expect(router.navigateByUrl).not.toHaveBeenCalled();
    response.next(true);
    response.complete();
    expect(router.navigateByUrl).toHaveBeenCalledOnceWith('/scopes');
    expect(component.isLoading()).toBeFalse();
  });
});

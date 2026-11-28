import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom, of, throwError } from 'rxjs';

import { Scope } from '../../shared/models/equipment/scope.model';
import { AddResultPayload } from '../../shared/services/add-result-payload.model';
import { MessageService } from '../../shared/services/message.service';
import { ScopeService } from '../shared/scope.service';
import { AddScopeComponent } from './add-scope.component';

describe('AddScopeComponent', () => {
  const route = { snapshot: { queryParams: {} } };
  let component: AddScopeComponent;
  let add: jasmine.Spy<ScopeService['add']>;
  let router: jasmine.SpyObj<Router>;
  let messages: jasmine.SpyObj<MessageService>;

  beforeEach(async () => {
    add = jasmine.createSpy('add').and.returnValue(of(new AddResultPayload()));
    router = jasmine.createSpyObj<Router>('Router', ['navigate']);
    messages = jasmine.createSpyObj<MessageService>('MessageService', ['info', 'error']);
    TestBed.configureTestingModule({
      providers: [
        { provide: ScopeService, useValue: { createNew: Scope, add } },
        { provide: Router, useValue: router },
        { provide: ActivatedRoute, useValue: route },
        { provide: MessageService, useValue: messages },
      ],
    });
    component = TestBed.runInInjectionContext(() => new AddScopeComponent(TestBed.inject(ScopeService)));
    await component.ngOnInit();
  });

  it('validates the scope and returns to the list after saving it', async () => {
    const scope = await firstValueFrom(component.item$);
    if (!scope) {
      throw new Error('Expected the item to be initialized');
    }
    expect(component.isValid()).toBeFalse();
    scope.model = 'Reflector';
    expect(component.isValid()).toBeTrue();

    await component.addItem();

    expect(add).toHaveBeenCalledOnceWith(scope);
    expect(messages.info).toHaveBeenCalledWith('A new item has been added');
    expect(router.navigate).toHaveBeenCalledOnceWith(['..'], { relativeTo: TestBed.inject(ActivatedRoute) });
  });

  it('starts a new entry after a successful save and continue', async () => {
    const scope = await firstValueFrom(component.item$);
    if (!scope) {
      throw new Error('Expected the item to be initialized');
    }
    scope.model = 'Reflector';

    await component.addItemAndContinue();

    expect(add).toHaveBeenCalledOnceWith(scope);
    expect(await firstValueFrom(component.item$)).not.toBe(scope);
    expect(component.isValid()).toBeFalse();
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('keeps the entry and clears loading when saving fails', async () => {
    const scope = await firstValueFrom(component.item$);
    if (!scope) {
      throw new Error('Expected the item to be initialized');
    }
    add.and.returnValue(throwError(() => new Error('Save failed')));

    await component.addItem();

    expect(await firstValueFrom(component.item$)).toBe(scope);
    expect(messages.error).toHaveBeenCalledWith('Unable to add a new item');
    expect(router.navigate).not.toHaveBeenCalled();
    expect(component.isLoading()).toBeFalse();
  });
});

import { TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { firstValueFrom, Subject } from 'rxjs';

import { Scope } from '../../shared/models/equipment/scope.model';
import { AddResultPayload } from '../../shared/services/add-result-payload.model';
import { ScopeService } from '../shared/scope.service';
import { AddScopeDialogComponent } from './add-scope-dialog.component';

describe('AddScopeDialogComponent', () => {
  let component: AddScopeDialogComponent;
  let add: jasmine.Spy<ScopeService['add']>;
  let dialog: jasmine.SpyObj<MatDialogRef<AddScopeDialogComponent, Scope>>;

  beforeEach(() => {
    add = jasmine.createSpy('add');
    dialog = jasmine.createSpyObj('MatDialogRef', ['close']);
    TestBed.configureTestingModule({ providers: [{ provide: ScopeService, useValue: { createNew: Scope, add } }] });
    component = TestBed.runInInjectionContext(() => new AddScopeDialogComponent(TestBed.inject(ScopeService), dialog));
  });

  it('closes with the saved scope only after the service returns it', async () => {
    component.addItem();
    expect(add).not.toHaveBeenCalled();
    component.ngOnInit();
    const scope = await firstValueFrom(component.item$);
    if (!scope) {
      throw new Error('Expected the item to be initialized');
    }
    expect(component.isValid()).toBeFalse();
    scope.model = 'Reflector';
    expect(component.isValid()).toBeTrue();

    const response = new Subject<AddResultPayload>();
    add.and.returnValue(response);
    component.addItem();
    expect(add).toHaveBeenCalledOnceWith(scope);
    expect(dialog.close).not.toHaveBeenCalled();

    const saved = new Scope({ id: 'scope-1', model: scope.model });
    response.next(new AddResultPayload({ payload: saved }));
    response.complete();
    expect(dialog.close).toHaveBeenCalledOnceWith(saved);
  });

  it('closes without saving when cancelled', () => {
    component.cancel();
    expect(dialog.close).toHaveBeenCalledOnceWith();
    expect(add).not.toHaveBeenCalled();
  });
});

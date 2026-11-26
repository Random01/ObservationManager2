import { TestBed } from '@angular/core/testing';

import { Scope } from '../../shared/models/equipment/scope.model';
import { AddScopeDialogService } from '../add-scope-dialog';
import { ScopeService } from '../shared/scope.service';
import { ScopeSelectorComponent } from './scope-selector.component';

describe('ScopeSelectorComponent', () => {
  const scope = new Scope({ id: 'scope-1', model: 'Reflector' });
  let component: ScopeSelectorComponent;
  let openDialog: jasmine.Spy<AddScopeDialogService['openDialog']>;

  beforeEach(async () => {
    openDialog = jasmine.createSpy('openDialog');
    TestBed.configureTestingModule({
      providers: [
        { provide: ScopeService, useValue: { getAll: () => Promise.resolve([scope]) } },
        { provide: AddScopeDialogService, useValue: { openDialog } },
      ],
    });
    const fixture = TestBed.createComponent(ScopeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('loads the options and does not emit another selection for the same ID', () => {
    expect(component.items).toEqual([scope]);
    const change = jasmine.createSpy('change');
    component.itemChange.subscribe(change);
    component.onItemSelected(scope);
    component.onItemSelected(new Scope({ id: scope.id }));
    expect(change).toHaveBeenCalledOnceWith(scope);
  });

  it('prepends and selects a scope created by the add dialog', async () => {
    const added = new Scope({ id: 'scope-2', model: 'Refractor' });
    openDialog.and.resolveTo(added);
    const change = jasmine.createSpy('change');
    component.itemChange.subscribe(change);

    component.openDialog();
    await Promise.resolve();

    expect(component.items).toEqual([added, scope]);
    expect(component.item).toBe(added);
    expect(change).toHaveBeenCalledOnceWith(added);
  });
});

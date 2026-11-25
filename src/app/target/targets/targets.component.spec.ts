import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

import { AuthenticationService } from '../../auth/shared';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';
import { Entity } from '../../shared/models/entity.model';
import { TargetType } from '../../shared/models/target-type.model';
import { Target } from '../../shared/models/target.model';
import { User } from '../../shared/models/user.model';
import { MessageService } from '../../shared/services/message.service';
import { TargetService } from '../shared/target.service';
import { TargetSearchParams } from '../target-search-params/target-search-params.model';
import { TargetsComponent } from './targets.component';

describe('TargetsComponent', () => {
  const user = new User({ id: 'observer-1' });
  let component: TargetsComponent;
  let getItems: jasmine.Spy<TargetService['getItems']>;

  beforeEach(() => {
    getItems = jasmine.createSpy<TargetService['getItems']>('getItems').and.resolveTo({ items: [], pageCount: 0, pages: 0, totalCount: 0 });
    TestBed.configureTestingModule({
      providers: [
        { provide: TargetService, useValue: { getItems } },
        { provide: AuthenticationService, useValue: { getCurrentUser: () => user } },
        { provide: ActivatedRoute, useValue: {} },
        { provide: Router, useValue: {} },
        { provide: MessageService, useValue: {} },
        { provide: DeleteEntityDialogService, useValue: {} },
      ],
    });
    component = TestBed.runInInjectionContext(() => new TargetsComponent(TestBed.inject(TargetService)));
  });

  it('reloads targets with the selected name and type filters', async () => {
    const filters = new TargetSearchParams({ name: 'M31', type: TargetType.Galaxy });
    component.onSearch(filters);

    expect(await firstValueFrom(component.searchParameters$)).toBe(filters);
    expect(getItems.calls.mostRecent().args[0].getQueryString()).toBe('page=0&size=10&name=M31&type=GX');
  });

  it('allows edits and deletion only for a target created by the current observer', () => {
    const owned = new Target({ userCreated: new Entity({ id: user.id }) });
    const other = new Target({ userCreated: new Entity({ id: 'observer-2' }) });
    const catalog = new Target();

    expect(component.canEdit(owned)).toBeTrue();
    expect(component.canDelete(owned)).toBeTrue();
    expect(component.canEdit(other)).toBeFalse();
    expect(component.canDelete(catalog)).toBeFalse();
  });
});

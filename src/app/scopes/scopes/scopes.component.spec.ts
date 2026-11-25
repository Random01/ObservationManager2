import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom, of, Subject } from 'rxjs';

import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';
import { Scope } from '../../shared/models/equipment/scope.model';
import { ExportType } from '../../shared/models/export-type.model';
import { SortOrder } from '../../shared/models/sort-order.model';
import { MessageService } from '../../shared/services/message.service';
import { ScopeService } from '../shared/scope.service';
import { ScopesComponent } from './scopes.component';

class TestScopesComponent extends ScopesComponent {
  public override remove(scope: Scope) {
    return super.remove(scope);
  }
}

describe('ScopesComponent', () => {
  const scope = new Scope({ id: 'scope-1', model: 'Reflector' });
  const page = { items: [scope], pageCount: 1, pages: 2, totalCount: 6 };
  let component: TestScopesComponent;
  let service: jasmine.SpyObj<ScopeService>;
  let dialog: jasmine.SpyObj<DeleteEntityDialogService>;
  let router: jasmine.SpyObj<Router>;
  let messages: jasmine.SpyObj<MessageService>;
  let queryParams: Subject<Record<string, string>>;

  beforeEach(() => {
    queryParams = new Subject();
    service = jasmine.createSpyObj<ScopeService>('ScopeService', ['getItems', 'delete', 'exportItems']);
    service.getItems.and.resolveTo(page);
    dialog = jasmine.createSpyObj<DeleteEntityDialogService>('DeleteEntityDialogService', ['show']);
    router = jasmine.createSpyObj<Router>('Router', ['navigate']);
    messages = jasmine.createSpyObj<MessageService>('MessageService', ['error']);
    TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useValue: { queryParams } },
        { provide: Router, useValue: router },
        { provide: DeleteEntityDialogService, useValue: dialog },
        { provide: MessageService, useValue: messages },
      ],
    });
    component = TestBed.runInInjectionContext(() => new TestScopesComponent(service));
  });

  it('loads the page from the URL and writes paging changes back to the URL', async () => {
    component.sortField = 'model';
    component.sortDirection = SortOrder.Desc;
    component.ngOnInit();
    queryParams.next({ page: '1', size: '5' });
    expect(component.isLoading()).toBeTrue();
    expect(service.getItems).toHaveBeenCalledOnceWith(jasmine.objectContaining({ page: 1, size: 5, sortField: 'model', sortDirection: SortOrder.Desc }));
    await Promise.resolve();
    expect(await firstValueFrom(component.page$)).toEqual(page);
    expect(component.isLoading()).toBeFalse();

    component.onPageChanged({ pageIndex: 0, pageSize: 10, length: 6 });
    expect(router.navigate).toHaveBeenCalledOnceWith([], { queryParams: { page: 0, size: 10 } });
  });

  it('reports a failed list request and clears the loading state', async () => {
    service.getItems.and.rejectWith(new Error('List unavailable'));
    await component.loadItems();

    expect(messages.error).toHaveBeenCalledWith('Unable to load items');
    expect((await firstValueFrom(component.page$)).items).toEqual([]);
    expect(component.isLoading()).toBeFalse();
  });

  it('deletes the scope only after confirmation and reloads the list', async () => {
    dialog.show.and.resolveTo({ success: false });
    await component.remove(scope);
    expect(service.delete).not.toHaveBeenCalled();

    dialog.show.and.resolveTo({ success: true });
    service.delete.and.returnValue(of(true));
    await component.remove(scope);
    expect(service.delete).toHaveBeenCalledOnceWith(scope.id);
    expect(service.getItems).toHaveBeenCalledTimes(1);
    expect(component.isLoading()).toBeFalse();
  });

  it('passes the chosen export format and reports export failures', async () => {
    service.exportItems.and.rejectWith(new Error('Export unavailable'));
    await component.exportToCsv();
    await component.exportToTxt();

    expect(service.exportItems.calls.allArgs().map(([params]) => params.exportType)).toEqual([ExportType.CSV, ExportType.TXT]);
    expect(messages.error).toHaveBeenCalledWith('Unable to export');
    expect(component.isLoading()).toBeFalse();
  });
});

import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';

import { Scope } from '../../shared/models/equipment/scope.model';
import { AddScopeDialogComponent } from './add-scope-dialog.component';
import { AddScopeDialogService } from './add-scope-dialog.service';

describe('AddScopeDialogService', () => {
  let dialog: jasmine.SpyObj<MatDialog>;
  let service: AddScopeDialogService;
  let closed: Subject<Scope | undefined>;

  beforeEach(() => {
    closed = new Subject();
    dialog = jasmine.createSpyObj<MatDialog>('MatDialog', ['open']);
    dialog.open.and.returnValue(jasmine.createSpyObj('MatDialogRef', { afterClosed: closed }));
    service = new AddScopeDialogService(dialog);
  });

  it('returns the scope selected by the dialog', async () => {
    const result = service.openDialog();
    expect(dialog.open).toHaveBeenCalledOnceWith(AddScopeDialogComponent, { width: '550px' });
    const scope = new Scope({ id: 'scope-1' });
    closed.next(scope);
    expect(await result).toBe(scope);
  });

  it('rejects the promise when the user cancels', async () => {
    const result = service.openDialog();
    closed.next(undefined);
    await expectAsync(result).toBeRejected();
  });
});

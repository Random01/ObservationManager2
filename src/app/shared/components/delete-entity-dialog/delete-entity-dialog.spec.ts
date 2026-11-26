import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';

import { DeleteEntityDialogResult } from './delete-entity-dialog-result.interface';
import { DeleteEntityDialogComponent } from './delete-entity-dialog.component';
import { DeleteEntityDialogService } from './delete-entity-dialog.service';

describe('Delete entity confirmation', () => {
  const options = { message: 'Delete this scope?' };

  it('opens the confirmation with the caller’s message and returns the dialog result', async () => {
    const dialog = jasmine.createSpyObj<MatDialog>('MatDialog', ['open']);
    dialog.open.and.returnValue(jasmine.createSpyObj('MatDialogRef', { afterClosed: of({ success: true }) }));
    const service = new DeleteEntityDialogService(dialog);

    expect(await service.show(options)).toEqual({ success: true });
    expect(dialog.open).toHaveBeenCalledOnceWith(DeleteEntityDialogComponent, jasmine.objectContaining({ data: options }));
  });

  it('distinguishes cancellation from confirmation', () => {
    const ref = jasmine.createSpyObj<MatDialogRef<DeleteEntityDialogComponent, DeleteEntityDialogResult>>('MatDialogRef', ['close']);
    const component = new DeleteEntityDialogComponent(ref, options);
    component.onNoClick();
    component.onOkClick();

    expect(ref.close.calls.allArgs()).toEqual([[{ success: false }], [{ success: true }]]);
  });
});

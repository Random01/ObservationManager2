import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { firstValueFrom } from 'rxjs';

import { DeleteEntityDialogOptions } from './delete-entity-dialog-options.interface';
import { DeleteEntityDialogResult } from './delete-entity-dialog-result.interface';
import { DeleteEntityDialogComponent } from './delete-entity-dialog.component';

@Injectable({ providedIn: 'root' })
export class DeleteEntityDialogService {
  constructor(private readonly dialog: MatDialog) {}

  public show(options: DeleteEntityDialogOptions): Promise<DeleteEntityDialogResult> {
    const dialogRef = this.dialog.open(DeleteEntityDialogComponent, {
      width: '250px',
      data: options,
    });

    return firstValueFrom(dialogRef.afterClosed());
  }
}

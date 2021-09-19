import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Entity } from '../models/models';

@Injectable()
export abstract class AddNewEntityDialogService<T extends Entity> {

  public item: T;

  constructor(
    protected readonly dialog: MatDialog,
  ) { }

  public openDialog(): Promise<T> {
    return new Promise((success, fail) => {
      const subscription = this.createDialog()
        .afterClosed()
        .subscribe((result: T) => {
          subscription.unsubscribe();

          if (result) {
            success(result);
          } else {
            fail();
          }
        });
    });

  }

  protected abstract createDialog(): any;
}

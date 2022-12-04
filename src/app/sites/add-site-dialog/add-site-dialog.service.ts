import { Injectable } from '@angular/core';

import { Site } from '../../shared/models/models';
import { AddNewEntityDialogService } from '../../shared/services/add-new-entity-dialog.service';
import { AddSiteDialogComponent } from './add-site-dialog.component';

@Injectable({ providedIn: 'root' })
export class AddSiteDialogService extends AddNewEntityDialogService<Site> {

  protected createDialog() {
    return this.dialog.open(AddSiteDialogComponent, {
      width: '500px',
    });
  }

}

import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { Site } from '../../shared/models/models';
import { AddNewEntityDialogService } from '../../shared/services/add-new-entity-dialog.service';
import { AddSiteDialogComponent } from './add-site-dialog.component';

@Injectable()
export class AddSiteDialogService extends AddNewEntityDialogService<Site> {

    constructor(
        protected dialog: MatDialog) {
        super(dialog);
    }

    createDialog() {
        return this.dialog.open(AddSiteDialogComponent, {
            width: '300px'
        });
    }

}

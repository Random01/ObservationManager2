import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material';
import { Site } from '../../shared/models/models';
import { AddNewEntityDialogService } from '../../shared/services/add-new-entity-dialog.service';
import { SiteService } from '../shared/site.service';

@Injectable()
export class AddSiteDialogService extends AddNewEntityDialogService<Site, SiteService> {

    constructor(
        protected dialog: MatDialog) {
        super(dialog);
    }

    createDialog() {
        return this.dialog.open(AddSiteDialogService, {
            width: '350px'
        });
    }

}

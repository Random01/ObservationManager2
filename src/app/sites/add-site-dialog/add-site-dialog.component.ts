import { Component } from '@angular/core';

import { MatDialogRef } from '@angular/material';
import { AddEntityDialogComponent } from '../../shared/components/add-entity-dialog.component';
import { Site } from '../../shared/models/models';
import { SiteService } from '../shared/site.service';

@Component({
    selector: 'om-add-site-dialog',
    templateUrl: './add-site-dialog.component.html',
    styleUrls: [
        './add-site-dialog.component.css'
    ]
})
export class AddSiteDialogComponent extends AddEntityDialogComponent<Site, SiteService> {
    constructor(
        protected storageService: SiteService,
        protected dialogRef: MatDialogRef<AddSiteDialogComponent, Site>
    ) {
        super(storageService, dialogRef);
    }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

import { AddEntityDialogComponent } from '../../shared/components/add-entity-dialog.component';
import { Site } from '../../shared/models/models';
import { SiteService } from '../shared/site.service';

@Component({
  selector: 'om-add-site-dialog',
  templateUrl: './add-site-dialog.component.html',
  styleUrls: [
    './add-site-dialog.component.css',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddSiteDialogComponent extends AddEntityDialogComponent<Site, SiteService> {

  constructor(
    storageService: SiteService,
    dialogRef: MatDialogRef<AddSiteDialogComponent, Site>,
  ) {
    super(storageService, dialogRef);
  }

}

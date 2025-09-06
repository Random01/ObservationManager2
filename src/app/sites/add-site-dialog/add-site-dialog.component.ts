import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { AddEntityDialogComponent } from '../../shared/components/add-entity-dialog.component';
import { Site } from '../../shared/models/models';
import { SiteService } from '../shared/site.service';
import { SiteComponent } from '../site';

@Component({
    selector: 'om-add-site-dialog',
    templateUrl: 'add-site-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
    MatDialogModule,
    MatButtonModule,
    AsyncPipe,
    SiteComponent
]
})
export class AddSiteDialogComponent extends AddEntityDialogComponent<Site, SiteService> {

  constructor(
    storageService: SiteService,
    dialogRef: MatDialogRef<AddSiteDialogComponent, Site>,
  ) {
    super(storageService, dialogRef);
  }

}

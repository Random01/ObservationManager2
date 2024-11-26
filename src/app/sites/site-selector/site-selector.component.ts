import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SiteService } from '../shared/site.service';
import { EntitySelectorComponent } from '../../shared/components/entity-selector/entity-selector.component';
import { Site } from '../../shared/models/models';
import { AddSiteDialogService } from '../add-site-dialog';

@Component({
    selector: 'om-site-selector',
    templateUrl: '../../shared/components/entity-selector/entity-selector.component.html',
    styleUrls: [
        '../../shared/components/entity-selector/entity-selector.component.css'
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatFormFieldModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule,
        FormsModule,
        NgForOf,
    ]
})
export class SiteSelectorComponent extends EntitySelectorComponent<Site, SiteService> {

  constructor(
    storageService: SiteService,
    dialogService: AddSiteDialogService,
    cdRef: ChangeDetectorRef,
  ) {
    super(storageService, dialogService, cdRef);

    this.placeholder = 'Site';
  }

}

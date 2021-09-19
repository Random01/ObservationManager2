import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

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

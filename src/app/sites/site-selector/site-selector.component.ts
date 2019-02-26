import { Component } from '@angular/core';

import { SiteService } from '../shared/site.service';
import { EntitySelectorComponent } from '../../shared/components/entity-selector/entity-selector.component';
import { Site } from '../../shared/models/models';
import { AddSiteDialogService } from '../add-site-dialog';

@Component({
    selector: 'om-site-selector',
    templateUrl: '../../shared/components/entity-selector/entity-selector.component.html',
    styleUrls: [
        '../../shared/components/entity-selector/entity-selector.component.css'
    ]
})
export class SiteSelectorComponent extends EntitySelectorComponent<Site, SiteService> {

    constructor(
        protected storageService: SiteService,
        protected dialogService: AddSiteDialogService
    ) {
        super(storageService, dialogService);

        this.placeholder = 'Site';
    }

}

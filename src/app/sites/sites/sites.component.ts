import { Component } from '@angular/core';

import { Site } from '../../shared/models/site.model';
import { SiteService } from '../shared/site.service';

import { EntityListComponent } from '../../shared/components/entity-list.component';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';

@Component({
    selector: 'om-sites',
    templateUrl: './sites.component.html',
    styleUrls: [ './sites.component.css' ]
})

export class SitesComponent extends EntityListComponent<Site> {

    displayedColumns: string[] = [
        'name',
        'timezone',
        'latitude',
        'longitude',
        'elevation',
        'actions'
    ];

    constructor(
        protected siteService: SiteService,
        protected deleteEntityDialogService: DeleteEntityDialogService) {
        super(siteService, deleteEntityDialogService);
    }

}

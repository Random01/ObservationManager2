import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Site } from '../../shared/models/site.model';
import { SiteService } from '../shared/site.service';

import { EntityListComponent } from '../../shared/components/entity-list.component';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';
import { AppContextService } from '../../shared/services/app-context.service';

@Component({
    selector: 'om-sites',
    templateUrl: './sites.component.html',
    styleUrls: ['./sites.component.css'],
})
export class SitesComponent extends EntityListComponent<Site> {

    displayedColumns: string[] = [
        'name',
        'timezone',
        'latitude',
        'longitude',
        'elevation',
        'actions',
    ];

    constructor(
        siteService: SiteService,
        deleteEntityDialogService: DeleteEntityDialogService,
        route: ActivatedRoute,
        router: Router,
        appContext: AppContextService,
    ) {
        super(siteService, deleteEntityDialogService, route, router, appContext);
    }

}

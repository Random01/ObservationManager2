import { Component } from '@angular/core';

import { Site } from '../../shared/models/site.model';
import { SiteService } from '../shared/site.service';

import { EntityListComponent } from '../../shared/components/entity-list.component';

@Component({
    selector: 'om-sites',
    templateUrl: './sites.component.html',
    providers: [SiteService]
})

export class SitesComponent extends EntityListComponent<Site> {

    displayedColumns: string[] = [
        'name',
        'timezone',
        'longitude',
        'latitude',
        'elevation',
        'actions'
    ];

    constructor(private siteService: SiteService) {
        super(siteService);
    }

}

import { Component } from '@angular/core';

import { Site } from '../../shared/models/site.model';
import { SiteService } from '../shared/site.service';

import { EntityListComponent } from '../../shared/components/entity-list.component';

@Component({
    selector: 'om-sites',
    templateUrl: './sites.component.html'
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
        private siteService: SiteService) {
        super(siteService);
    }

}
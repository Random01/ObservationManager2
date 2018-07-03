import { Component } from '@angular/core';

import { Site } from './../shared/models/site.model';
import { SiteService } from './shared/site.service';
import { EntityComponent } from '../shared/components/entity-component';

@Component({
    selector: 'om-sites',
    templateUrl: './sites.component.html',
    providers: [SiteService]
})

export class SitesComponent extends EntityComponent<Site> {

    constructor(private siteService: SiteService) {
        super(siteService);
    }

    createEmpty(): Site {
        return new Site();
    }

}

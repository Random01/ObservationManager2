import { Component, Input, OnInit } from '@angular/core';

import { Site } from './../shared/models/site.model';
import { SiteService } from './shared/site.service';

@Component({
    selector: 'om-sites',
    templateUrl: './sites.component.html',
    providers: [SiteService]
})

export class SitesComponent implements OnInit {

    sites: Site[];
    selectedSite: Site;

    constructor(private siteService: SiteService) {
    }

    getSites(): void {
        this.siteService.getAll()
            .then(sites => this.sites = sites);
    }

    onSelect(site: Site): void {
        this.selectedSite = site;
    }

    createNew(): void {
        this.selectedSite = new Site();
    }

    addNew(): void {
        if (this.selectedSite) {
            this.siteService
                .add(this.selectedSite)
                .then(addedSite => this.selectedSite = addedSite);
        }
    }

    ngOnInit(): void {
        this.getSites();
    }
}

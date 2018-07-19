import { Component, Input, OnInit } from '@angular/core';
import { Session, Site } from '../../shared/models/models';
import { SiteService } from '../../sites/shared/site.service';

@Component({
    selector: 'om-session',
    templateUrl: './session.component.html',
    styleUrls: ['./session.component.css'],
    providers: [
        SiteService
    ]
})

export class SessionComponent implements OnInit {

    @Input() session: Session;

    sites: Site[];

    constructor(
        private siteService: SiteService
    ) {
    }

    ngOnInit() {
        this.siteService.getAll().then(sites => this.sites = sites);
    }
}

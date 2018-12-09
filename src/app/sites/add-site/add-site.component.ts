import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { AddEntityComponent } from '../../shared/components/add-entity.component';

import { Site } from '../../shared/models/models';
import { SiteService } from '../shared/site.service';

@Component({
    selector: 'om-add-site',
    templateUrl: './add-site.component.html'
})

export class AddSiteComponent extends AddEntityComponent<Site> {

    constructor(
        private router: Router,
        private service: SiteService) {
        super(service);
    }

    goBack() {
        this.router.navigate(['/sites']);
    }
}

import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { EditEntityComponent } from '../../shared/components/edit-entity.component';
import { SiteService } from '../shared/site.service';
import { Site } from '../../shared/models/models';

@Component({
    selector: 'om-edit-site',
    templateUrl: './edit-site.component.html',
})
export class EditSiteComponent extends EditEntityComponent<Site> {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        service: SiteService,
    ) {
        super(service);
    }

    getItemId(): string {
        return this.route.snapshot.paramMap.get('id');
    }

    goBack() {
        this.router.navigate(['/sites']);
    }

}

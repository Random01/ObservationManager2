import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { AddEntityComponent } from '../../shared/components/add-entity.component';
import { Filter } from '../../shared/models/equipment/equipment';
import { FilterService } from '../shared/filter.service';
import { AppContextService } from '../../shared/services/app-context.service';

@Component({
    selector: 'om-add-filter',
    templateUrl: './add-filter.component.html',
})
export class AddFilterComponent extends AddEntityComponent<Filter> {

    constructor(
        private router: Router,
        service: FilterService,
        appContext: AppContextService,
    ) {
        super(service, appContext);
    }

    goBack() {
        this.router.navigate(['/filters']);
    }
}

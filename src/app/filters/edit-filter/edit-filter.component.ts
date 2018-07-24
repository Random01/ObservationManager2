import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { EditEntityComponent } from '../../shared/components/edit-entity.component';

import { Filter } from '../../shared/models/equipment/equipment';
import { FilterService } from '../shared/filter.service';

@Component({
    selector: 'om-edit-filter',
    templateUrl: './edit-filter.component.html',
    providers: [FilterService]
})

export class EditFilterComponent extends EditEntityComponent<Filter> {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: FilterService) {
        super(service);
    }

    getItemId(): string {
        return this.route.snapshot.paramMap.get('filterId');
    }

    goBack() {
        this.router.navigate(['/filters']);
    }

}

import { Component } from '@angular/core';

import { Filter } from '../../shared/models/equipment/equipment';
import { FilterService } from '../shared/filter.service';
import { EntityListComponent } from '../../shared/components/entity-list.component';

@Component({
    selector: 'om-filters',
    templateUrl: './filters.component.html',
    providers: [FilterService]
})

export class FiltersComponent extends EntityListComponent<Filter> {

    displayedColumns: string[] = [
        'model',
        'vendor',
        'filterType',
        'actions'
    ];

    constructor(private service: FilterService) {
        super(service);
    }

}

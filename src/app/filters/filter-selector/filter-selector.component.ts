import { Component } from '@angular/core';

import { Filter } from '../../shared/models/equipment/equipment';
import { FilterService } from '../shared/filter.service';
import { EntitySelectorComponent } from '../../shared/components/entity-selector/entity-selector.component';

@Component({
    selector: 'om-filter-selector',
    templateUrl: './filter-selector.component.html',
    styleUrls: [
        './filter-selector.component.css'
    ]
})
export class FilterSelectorComponent extends EntitySelectorComponent<Filter, FilterService> {

    constructor(
        protected filterService: FilterService
    ) {
        super(filterService);
    }

}

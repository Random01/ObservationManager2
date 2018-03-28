import { Component, Input, OnInit } from '@angular/core';

import { Filter } from '../shared/models/equipment/equipment';
import { FilterService } from './shared/filter.service';
import { EntityComponent } from '../shared/components/entity-component';
import { Entity } from '../shared/models/models';

@Component({
    selector: 'om-filters',
    templateUrl: './filters.component.html',
    providers: [FilterService]
})

export class FiltersComponent extends EntityComponent<Filter> {

    constructor(private eyepieceService: FilterService) {
        super(eyepieceService);
    }

    createEmpty(): Filter {
        return new Filter();
    }
}

import { Component, Input } from '@angular/core';

import { Filter } from './../../shared/models/equipment/filter.model';

@Component({
    selector: 'om-filter',
    templateUrl: './filter.component.html',
    styleUrls: [ './filter.component.css' ]
})

export class FilterComponent {
    @Input() filter: Filter;
}

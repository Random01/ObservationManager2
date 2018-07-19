import { Component, Input } from '@angular/core';

import { Filter } from '../../shared/models/equipment/filter.model';
import { FilterType } from '../../shared/models/equipment/filter-type.enum';

@Component({
    selector: 'om-filter',
    templateUrl: './filter.component.html',
    styleUrls: [ './filter.component.css' ]
})

export class FilterComponent {
    @Input() filter: Filter;

    filterTypes: FilterType[] = [
        FilterType.Hbeta,
        FilterType.Halpha,
        FilterType.OIII,
        FilterType.BroadBand,
        FilterType.NarrowBand,
        FilterType.Color,
        FilterType.Corrective,
        FilterType.Solar,
        FilterType.Neutral
    ];
}

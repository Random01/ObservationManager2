import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Filter } from '../../shared/models/equipment/filter.model';
import { FilterType } from '../../shared/models/equipment/filter-type.enum';
import { FilterTypeService } from '../shared/filter-type.service';

@Component({
    selector: 'om-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

    @Input() public filter: Filter;

    public filterTypes$: Observable<FilterType[]>;

    constructor(private filterTypeService: FilterTypeService) {
    }

    public ngOnInit(): void {
        this.filterTypes$ = this.filterTypeService.getAll();
    }
}

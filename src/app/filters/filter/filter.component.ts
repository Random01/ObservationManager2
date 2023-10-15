import { Component, Input } from '@angular/core';

import { Filter } from '../../shared/models/equipment/filter.model';
import { FilterTypeService } from '../shared/filter-type.service';

@Component({
  selector: 'om-filter',
  templateUrl: 'filter.component.html',
  styleUrls: ['filter.component.less']
})
export class FilterComponent {

  @Input() public filter?: Filter;

  public readonly filterTypes$ = this.filterTypeService.getAll();

  constructor(private readonly filterTypeService: FilterTypeService) { }

}

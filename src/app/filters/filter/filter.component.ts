import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { Filter } from '../../shared/models/equipment/filter.model';
import { FilterTypeService } from '../shared/filter-type.service';
import { VendorSelectorComponent } from '../../equipment/vendor-selector';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'om-filter',
  templateUrl: 'filter.component.html',
  styleUrl: 'filter.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, VendorSelectorComponent, AsyncPipe],
})
export class FilterComponent {
  @Input() public filter?: Filter;

  public readonly filterTypes$ = this.filterTypeService.getAll();

  constructor(private readonly filterTypeService: FilterTypeService) {}
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { Filter } from '../../shared/models/equipment/equipment';
import { FilterService } from '../shared/filter.service';
import { EntitySelectorComponent } from '../../shared/components/entity-selector/entity-selector.component';
import { AddFilterDialogService } from '../add-filter-dialog';

@Component({
  selector: 'om-filter-selector',
  templateUrl: '../../shared/components/entity-selector/entity-selector.component.html',
  styleUrls: ['../../shared/components/entity-selector/entity-selector.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatFormFieldModule, MatSelectModule, MatIconModule, MatButtonModule, FormsModule],
})
export class FilterSelectorComponent extends EntitySelectorComponent<Filter, FilterService> {
  constructor(filterService: FilterService, addFilterService: AddFilterDialogService) {
    super(filterService, addFilterService);

    this.placeholder = 'Filters';
  }
}

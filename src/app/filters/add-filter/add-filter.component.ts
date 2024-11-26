import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { AddEntityComponent } from '../../shared/components/add-entity.component';
import { Filter } from '../../shared/models/equipment/equipment';
import { FilterService } from '../shared/filter.service';
import { FilterComponent } from '../filter/filter.component';

@Component({
    selector: 'om-add-filter',
    templateUrl: 'add-filter.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatButtonModule,
        NgIf,
        AsyncPipe,
        FilterComponent,
    ]
})
export class AddFilterComponent extends AddEntityComponent<Filter> {

  constructor(
    service: FilterService,
  ) {
    super(service);
  }

}

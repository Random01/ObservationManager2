import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Router } from '@angular/router';

import { AddEntityComponent } from '../../shared/components/add-entity.component';
import { Filter } from '../../shared/models/equipment/equipment';
import { FilterService } from '../shared/filter.service';

@Component({
  selector: 'om-add-filter',
  templateUrl: 'add-filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddFilterComponent extends AddEntityComponent<Filter> {

  constructor(
    private readonly router: Router,
    service: FilterService,
  ) {
    super(service);
  }

  public goBack() {
    this.router.navigate(['/filters']);
  }
}

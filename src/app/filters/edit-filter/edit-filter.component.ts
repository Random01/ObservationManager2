import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIf, AsyncPipe } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { EditEntityComponent } from '../../shared/components/edit-entity.component';
import { Filter } from '../../shared/models/equipment/equipment';
import { FilterService } from '../shared/filter.service';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'om-edit-filter',
  templateUrl: 'edit-filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatButtonModule,

    NgIf,
    AsyncPipe,

    FilterComponent,
  ],
})
export class EditFilterComponent extends EditEntityComponent<Filter> {

  constructor(
    service: FilterService,
  ) {
    super(service);
  }

  public getItemId(): string {
    return this.route.snapshot.paramMap.get('filterId');
  }

}

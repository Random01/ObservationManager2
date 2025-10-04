import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { Filter } from '../../shared/models/equipment/equipment';
import { FilterService } from '../shared/filter.service';
import { EntityListComponent } from '../../shared/components/entity-list.component';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';

@Component({
    selector: 'om-filters',
    templateUrl: 'filters.component.html',
    styleUrl: 'filters.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    RouterLink,
    AsyncPipe
]
})
export class FiltersComponent extends EntityListComponent<Filter> {

  public readonly displayedColumns: string[] = [
    'model',
    'vendor',
    'filterType',
    'actions',
  ];

  constructor(
    service: FilterService,
    deleteEntityDialogService: DeleteEntityDialogService,
    route: ActivatedRoute,
    router: Router,
  ) {
    super(service, deleteEntityDialogService, route, router);
  }

  protected override getExportFileName() {
    return 'eyepieces';
  }

}

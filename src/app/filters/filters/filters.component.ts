import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Filter } from '../../shared/models/equipment/equipment';
import { FilterService } from '../shared/filter.service';
import { EntityListComponent } from '../../shared/components/entity-list.component';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';
import { AppContextService } from '../../shared/services/app-context.service';

@Component({
  selector: 'om-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    appContext: AppContextService,
  ) {
    super(service, deleteEntityDialogService, route, router, appContext);
  }

  protected override getExportFileName() {
    return 'eyepieces';
  }

}

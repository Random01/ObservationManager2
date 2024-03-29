import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Lens } from '../../shared/models/equipment/equipment';
import { LensService } from '../shared/lens.service';
import { EntityListComponent } from '../../shared/components/entity-list.component';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';
import { AppContextService } from '../../shared/services/app-context.service';

@Component({
  selector: 'om-lenses',
  templateUrl: './lenses.component.html',
  styleUrls: ['./lenses.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LensesComponent extends EntityListComponent<Lens> {

  public readonly displayedColumns: string[] = [
    'model',
    'vendor',
    'factor',
    'actions',
  ];

  constructor(
    lensService: LensService,
    deleteEntityDialogService: DeleteEntityDialogService,
    route: ActivatedRoute,
    router: Router,
    appContext: AppContextService,
  ) {
    super(lensService, deleteEntityDialogService, route, router, appContext);
  }

  protected override getExportFileName(): string {
    return 'lenses';
  }

}

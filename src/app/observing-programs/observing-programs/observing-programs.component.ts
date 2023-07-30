import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EntityListComponent } from '../../shared/components/entity-list.component';
import { ObservingProgram } from '../../shared/models/observing-program.model';
import { ObservingProgramsService } from '../shared/observing-programs.service';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';
import { AppContextService } from '../../shared/services/app-context.service';

@Component({
  selector: 'om-observing-programs',
  templateUrl: './observing-programs.component.html',
  styleUrls: ['./observing-programs.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObservingProgramsComponent extends EntityListComponent<ObservingProgram> {

  public readonly displayedColumns: string[] = [
    'name',
    'description',
    'actions',
  ];

  constructor(
    service: ObservingProgramsService,
    deleteEntityDialogService: DeleteEntityDialogService,
    route: ActivatedRoute,
    router: Router,
    appContext: AppContextService,
  ) {
    super(service, deleteEntityDialogService, route, router, appContext);
  }

}

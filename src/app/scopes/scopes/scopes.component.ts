import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Scope } from '../../shared/models/equipment/scope.model';
import { ScopeService } from '../shared/scope.service';
import { EntityListComponent } from '../../shared/components/entity-list.component';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';
import { AppContextService } from '../../shared/services/app-context.service';

@Component({
  selector: 'om-scopes',
  templateUrl: './scopes.component.html',
  styleUrls: ['./scopes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScopesComponent extends EntityListComponent<Scope> {

  public readonly displayedColumns: string[] = [
    'model',
    'aperture',
    'focalLength',
    'vendor',
    'actions',
  ];

  constructor(
    service: ScopeService,
    deleteEntityDialogService: DeleteEntityDialogService,
    route: ActivatedRoute,
    router: Router,
    appContext: AppContextService,
  ) {
    super(service, deleteEntityDialogService, route, router, appContext);
  }

  protected override getExportFileName(): string {
    return 'scopes';
  }

}

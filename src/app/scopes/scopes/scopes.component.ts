import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AsyncPipe, DecimalPipe } from '@angular/common';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { Scope } from '../../shared/models/equipment/scope.model';
import { ScopeService } from '../shared/scope.service';
import { EntityListComponent } from '../../shared/components/entity-list.component';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'om-scopes',
  templateUrl: 'scopes.component.html',
  styleUrl: 'scopes.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatPaginatorModule, MatTableModule, MatButtonModule, MatIconModule, MatTooltipModule, RouterLink, AsyncPipe, DecimalPipe],
})
export class ScopesComponent extends EntityListComponent<Scope> {
  public readonly displayedColumns: string[] = ['model', 'aperture', 'focalLength', 'vendor', 'actions'];

  constructor(service: ScopeService, deleteEntityDialogService: DeleteEntityDialogService, route: ActivatedRoute, router: Router) {
    super(service, deleteEntityDialogService, route, router);
  }

  protected override getExportFileName(): string {
    return 'scopes';
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AsyncPipe, DecimalPipe, NgIf } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { Lens } from '../../shared/models/equipment/equipment';
import { LensService } from '../shared/lens.service';
import { EntityListComponent } from '../../shared/components/entity-list.component';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';

@Component({
  selector: 'om-lenses',
  templateUrl: 'lenses.component.html',
  styleUrl: 'lenses.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    RouterLink,
    NgIf,
    AsyncPipe,
    DecimalPipe,
  ],
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
  ) {
    super(lensService, deleteEntityDialogService, route, router);
  }

  protected override getExportFileName(): string {
    return 'lenses';
  }

}

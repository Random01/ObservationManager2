import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';

import { EntityListComponent } from '../../shared/components/entity-list.component';
import { ObservingProgram } from '../../shared/models/observing-program.model';
import { ObservingProgramsService } from '../shared/observing-programs.service';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'om-observing-programs',
  templateUrl: 'observing-programs.component.html',
  styleUrls: ['observing-programs.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    MatTableModule,
    NgIf,
    AsyncPipe,
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
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
  ) {
    super(service, deleteEntityDialogService, route, router);
  }

}

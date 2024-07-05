import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AsyncPipe, DecimalPipe, NgIf } from '@angular/common';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { EyepieceService } from '../shared/eyepiece.service';
import { Eyepiece } from '../../shared/models/equipment/equipment';
import { EntityListComponent } from '../../shared/components/entity-list.component';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';
import { EyepieceFocalLengthPipe } from "../../shared/models/pipes/eyepiece-focal-length-formatter.pipe";

@Component({
  selector: 'om-eyepieces',
  templateUrl: 'eyepieces.component.html',
  styleUrl: 'eyepieces.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    RouterLink,
    RouterLinkActive,
    NgIf,
    AsyncPipe,
    DecimalPipe,
    EyepieceFocalLengthPipe,
  ],
  // todo: find a way to use DecimalPipe directly in eyepieceFocalLength
  providers: [
    DecimalPipe,
  ],
})
export class EyepiecesComponent extends EntityListComponent<Eyepiece> {

  public readonly displayedColumns: string[] = [
    'model',
    'vendor',
    'focalLength',
    'apparentFOV',
    'actions',
  ];

  constructor(
    service: EyepieceService,
    deleteEntityDialogService: DeleteEntityDialogService,
    route: ActivatedRoute,
    router: Router,
  ) {
    super(service, deleteEntityDialogService, route, router);
  }

  public override getExportFileName() {
    return 'eyepieces';
  }

}

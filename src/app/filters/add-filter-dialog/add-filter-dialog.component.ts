import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { Filter } from '../../shared/models/equipment/equipment';
import { AddEntityDialogComponent } from '../../shared/components/add-entity-dialog.component';
import { FilterService } from '../shared/filter.service';
import { FilterComponent } from '../filter/filter.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'om-add-filter-dialog',
  templateUrl: './add-filter-dialog.component.html',
  styleUrls: ['./add-filter-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,

    NgIf,
    AsyncPipe,
    
    FilterComponent,
  ],
})
export class AddFilterDialogComponent extends AddEntityDialogComponent<Filter, FilterService> {
  constructor(
    storageService: FilterService,
    dialogRef: MatDialogRef<AddFilterDialogComponent, Filter>,
  ) {
    super(storageService, dialogRef);
  }
}

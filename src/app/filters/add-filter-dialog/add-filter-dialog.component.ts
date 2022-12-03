import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

import { Filter } from '../../shared/models/equipment/equipment';
import { AddEntityDialogComponent } from '../../shared/components/add-entity-dialog.component';
import { FilterService } from '../shared/filter.service';

@Component({
  selector: 'om-add-filter-dialog',
  templateUrl: './add-filter-dialog.component.html',
  styleUrls: [
    './add-filter-dialog.component.css',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddFilterDialogComponent extends AddEntityDialogComponent<Filter, FilterService> {
  constructor(
    storageService: FilterService,
    dialogRef: MatDialogRef<AddFilterDialogComponent, Filter>,
  ) {
    super(storageService, dialogRef);
  }
}

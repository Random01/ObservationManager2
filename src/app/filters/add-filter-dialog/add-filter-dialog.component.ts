import { Component } from '@angular/core';

import { MatDialogRef } from '@angular/material';
import { Filter } from '../../shared/models/equipment/equipment';
import { AddEntityDialogComponent } from '../../shared/components/add-entity-dialog.component';
import { FilterService } from '../shared/filter.service';

@Component({
    selector: 'om-add-filter-dialog',
    templateUrl: './add-filter-dialog.component.html',
    styleUrls: [
        './add-filter-dialog.component.css'
    ]
})
export class AddFilterDialogComponent extends AddEntityDialogComponent<Filter, FilterService> {
    constructor(
        protected storageService: FilterService,
        protected dialogRef: MatDialogRef<AddFilterDialogComponent, Filter>
    ) {
        super(storageService, dialogRef);
    }
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Filter } from '../../shared/models/equipment/equipment';
import { FilterService } from '../shared/filter.service';
import { EntityListComponent } from '../../shared/components/entity-list.component';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';

@Component({
    selector: 'om-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.css']
})
export class FiltersComponent extends EntityListComponent<Filter> {

    displayedColumns: string[] = [
        'model',
        'vendor',
        'filterType',
        'actions',
    ];

    constructor(
        protected service: FilterService,
        protected deleteEntityDialogService: DeleteEntityDialogService,
        protected route: ActivatedRoute,
        protected router: Router,
    ) {
        super(service, deleteEntityDialogService, route, router);
    }

    getExportFileName() {
        return 'Filters';
    }
}

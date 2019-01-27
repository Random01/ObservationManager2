import { Component } from '@angular/core';

import { Lens } from '../../shared/models/equipment/equipment';
import { LensService } from '../shared/lens.service';
import { EntityListComponent } from '../../shared/components/entity-list.component';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'om-lenses',
    templateUrl: './lenses.component.html',
    styleUrls: ['./lenses.component.css']
})

export class LensesComponent extends EntityListComponent<Lens> {

    displayedColumns: string[] = [
        'model',
        'factor',
        'vendor',
        'actions'
    ];

    constructor(
        protected lensService: LensService,
        protected deleteEntityDialogService: DeleteEntityDialogService,
        protected route: ActivatedRoute,
        protected router: Router) {
        super(lensService, deleteEntityDialogService, route, router);
    }

}

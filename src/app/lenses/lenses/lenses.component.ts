import { Component } from '@angular/core';

import { Lens } from '../../shared/models/equipment/equipment';
import { LensService } from '../shared/lens.service';
import { EntityListComponent } from '../../shared/components/entity-list.component';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';

@Component({
    selector: 'om-lenses',
    templateUrl: './lenses.component.html',
    providers: [LensService]
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
        protected deleteEntityDialogService: DeleteEntityDialogService) {
        super(lensService, deleteEntityDialogService);
    }

}

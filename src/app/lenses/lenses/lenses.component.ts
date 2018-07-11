import { Component } from '@angular/core';

import { Lens } from '../../shared/models/equipment/equipment';
import { LensService } from '../shared/lens.service';
import { EntityListComponent } from '../../shared/components/entity-list.component';

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

    constructor(private lensService: LensService) {
        super(lensService);
    }

}

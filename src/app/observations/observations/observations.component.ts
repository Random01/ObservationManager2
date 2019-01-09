import { Component } from '@angular/core';

import { Observation } from '../../shared/models/models';
import { ObservationService } from '../shared/observation.service';
import { EntityListComponent } from '../../shared/components/entity-list.component';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';

@Component({
    selector: 'om-observations',
    templateUrl: './observations.component.html',
    styleUrls: [
        './observations.component.css'
    ]
})

export class ObservationsComponent extends EntityListComponent<Observation> {

    displayedColumns: string[] = [
        'targetName',
        'scopeModel',
        'eyepieceModel',
        'filterModel',
        'result',
        'actions'
    ];

    constructor(
        protected observationService: ObservationService,
        protected deleteEntityDialogService: DeleteEntityDialogService) {
        super(observationService, deleteEntityDialogService);
    }

}

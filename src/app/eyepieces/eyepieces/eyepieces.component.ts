import { Component } from '@angular/core';

import { EyepieceService } from '../shared/eyepiece.service';
import { Eyepiece } from '../../shared/models/equipment/equipment';
import { EntityListComponent } from '../../shared/components/entity-list.component';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'om-eyepieces',
    templateUrl: './eyepieces.component.html'
})

export class EyepiecesComponent extends EntityListComponent<Eyepiece> {

    displayedColumns: string[] = [
        'model',
        'vendor',
        'focalLength',
        'apparentFOV',
        'actions'
    ];

    constructor(
        protected service: EyepieceService,
        protected deleteEntityDialogService: DeleteEntityDialogService,
        protected route: ActivatedRoute,
        protected router: Router) {
        super(service, deleteEntityDialogService, route, router);
    }

}

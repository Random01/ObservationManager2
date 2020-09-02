import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EyepieceService } from '../shared/eyepiece.service';
import { Eyepiece } from '../../shared/models/equipment/equipment';
import { EntityListComponent } from '../../shared/components/entity-list.component';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';
import { AppContextService } from '../../shared/services/app-context.service';

@Component({
    selector: 'om-eyepieces',
    templateUrl: './eyepieces.component.html',
    styleUrls: ['./eyepieces.component.css'],
})
export class EyepiecesComponent extends EntityListComponent<Eyepiece> {

    displayedColumns: string[] = [
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
        appContext: AppContextService,
    ) {
        super(service, deleteEntityDialogService, route, router, appContext);
    }

    getExportFileName() {
        return 'Eyepieces';
    }

}

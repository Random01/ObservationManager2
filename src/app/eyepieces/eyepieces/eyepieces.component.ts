import { Component } from '@angular/core';

import { EyepieceService } from '../shared/eyepiece.service';
import { Eyepiece } from '../../shared/models/equipment/equipment';
import { EntityListComponent } from '../../shared/components/entity-list.component';

@Component({
    selector: 'om-eyepieces',
    templateUrl: './eyepieces.component.html',
    providers: [EyepieceService]
})

export class EyepiecesComponent extends EntityListComponent<Eyepiece> {

    displayedColumns: string[] = [
        'model',
        'focalLength',
        'apparentFOV',
        'vendor',
        'actions'
    ];

    constructor(private eyepieceService: EyepieceService) {
        super(eyepieceService);
    }

}

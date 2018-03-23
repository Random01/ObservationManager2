import { Component, Input, OnInit } from '@angular/core';

import { Eyepiece } from './../shared/models/equipment/eyepiece.model';
import { EyepieceService } from './shared/eyepiece.service';
import { EntityComponent } from '../shared/components/entity-component';

@Component({
    selector: 'om-eyepieces',
    templateUrl: './eyepieces.component.html',
    providers: [EyepieceService]
})

export class EyepiecesComponent extends EntityComponent<Eyepiece> {
    constructor(private eyepieceService: EyepieceService) {
        super(eyepieceService);
    }
}

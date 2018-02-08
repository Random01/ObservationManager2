import { Component, Input, OnInit } from '@angular/core';

import { Eyepiece } from './../shared/models/equipment/eyepiece.model';
import { EyepieceService } from './shared/eyepiece.service';

@Component({
    selector: 'om-eyepieces',
    templateUrl: './eyepieces.component.html',
    providers: [ EyepieceService ]
})

export class EyepiecesComponent implements OnInit {

    eyepieces: Eyepiece[];
    selectedEyepiece: Eyepiece;

    constructor(private eyepieceService: EyepieceService) {
    }

    getEyepieces(): void {
        this.eyepieceService
            .getEyepieces()
            .then(eyepieces => this.eyepieces = eyepieces);
    }

    ngOnInit(): void {
        this.getEyepieces();
    }
}
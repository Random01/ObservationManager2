import { Component, Input, OnInit } from '@angular/core';

import { Eyepiece } from './../shared/models/equipment/eyepiece.model';
import { EyepieceService } from './shared/eyepiece.service';

@Component({
    selector: 'om-eyepieces',
    templateUrl: './eyepieces.component.html',
    providers: [EyepieceService]
})

export class EyepiecesComponent implements OnInit {

    eyepieces: Eyepiece[];
    selectedEyepiece: Eyepiece;

    constructor(private eyepieceService: EyepieceService) {
    }

    loadEyepieces(): void {
        this.eyepieceService
            .getAll()
            .then(eyepieces => this.eyepieces = eyepieces);
    }

    onSelect(ep: Eyepiece) {
        this.selectedEyepiece = ep;
    }

    add(): void {
        if (this.selectedEyepiece != null) {
            this.eyepieceService.add(this.selectedEyepiece);
        }
    }

    createNew(): void {
        this.selectedEyepiece = new Eyepiece();
    }

    ngOnInit(): void {
        this.loadEyepieces();
    }

}

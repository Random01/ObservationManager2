import { Component, Input } from '@angular/core';

import { Eyepiece } from '../../shared/models/equipment/eyepiece.model';

@Component({
    selector: 'om-eyepiece',
    templateUrl: './eyepiece.component.html',
    styleUrls: ['./eyepiece.component.css'],
})
export class EyepieceComponent {

    private _eyepiece: Eyepiece;

    isZoomEyepiece = false;

    @Input() set eyepiece(eyepiece: Eyepiece) {
        this._eyepiece = eyepiece;
        this.isZoomEyepiece = eyepiece.isZoomEyepiece;
    }

    get eyepiece(): Eyepiece {
        return this._eyepiece;
    }
}

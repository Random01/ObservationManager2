import { Component, Input } from '@angular/core';

import { Eyepiece } from './../../shared/models/equipment/eyepiece.model';

@Component({
    selector: 'om-eyepiece',
    templateUrl: './eyepiece.component.html',
    styleUrls: [ './eyepiece.component.css' ]
})

export class EyepieceComponent {
    @Input() eyepiece: Eyepiece;
}

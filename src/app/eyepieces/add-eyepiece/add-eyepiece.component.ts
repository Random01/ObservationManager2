import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { EyepieceService } from '../shared/eyepiece.service';

import { AddEntityComponent } from '../../shared/components/add-entity.component';
import { Eyepiece } from '../../shared/models/equipment/equipment';

@Component({
    selector: 'om-add-eyepiece',
    templateUrl: './add-eyepiece.component.html'
})

export class AddEyepieceComponent extends AddEntityComponent<Eyepiece> {
    constructor(
        private router: Router,
        eyepieceService: EyepieceService) {
        super(eyepieceService);
    }

    goBack() {
        this.router.navigate(['/eyepieces']);
    }
}

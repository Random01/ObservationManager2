import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { EditEntityComponent } from '../../shared/components/edit-entity.component';

import { Eyepiece } from '../../shared/models/equipment/equipment';
import { EyepieceService } from '../shared/eyepiece.service';

@Component({
    selector: 'om-edit-eyepiece',
    templateUrl: './edit-eyepiece.component.html',
    providers: [EyepieceService]
})

export class EditEyepieceComponent extends EditEntityComponent<Eyepiece> {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private eyepiece: EyepieceService) {
        super(eyepiece);
    }

    getItemId(): string {
        return this.route.snapshot.paramMap.get('id');
    }

    goBack() {
        this.router.navigate(['/eyepieces']);
    }

}

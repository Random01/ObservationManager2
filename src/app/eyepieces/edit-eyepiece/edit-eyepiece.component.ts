import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { EditEntityComponent } from '../../shared/components/edit-entity.component';

import { Eyepiece } from '../../shared/models/equipment/equipment';
import { EyepieceService } from '../shared/eyepiece.service';
import { AppContextService } from '../../shared/services/app-context.service';

@Component({
    selector: 'om-edit-eyepiece',
    templateUrl: './edit-eyepiece.component.html',
})
export class EditEyepieceComponent extends EditEntityComponent<Eyepiece> {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        eyepiece: EyepieceService,
        appContext: AppContextService,
    ) {
        super(eyepiece, appContext);
    }

    getItemId(): string {
        return this.route.snapshot.paramMap.get('id');
    }

    goBack() {
        this.router.navigate(['/eyepieces']);
    }

}

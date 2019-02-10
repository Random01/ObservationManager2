import { Component } from '@angular/core';

import { Eyepiece } from '../../shared/models/equipment/equipment';
import { EyepieceService } from '../shared/eyepiece.service';
import { EntitySelectorComponent } from '../../shared/components/entity-selector/entity-selector.component';

@Component({
    selector: 'om-eyepiece-selector',
    templateUrl: './eyepiece-selector.component.html',
    styleUrls: [
        './eyepiece-selector.component.css'
    ]
})
export class EyepieceSelectorComponent extends EntitySelectorComponent<Eyepiece, EyepieceService> {

    constructor(
        protected eyepieceService: EyepieceService
    ) {
        super(eyepieceService);
    }

}

import { Component } from '@angular/core';

import { Lens } from '../../shared/models/equipment/equipment';
import { LensService } from '../shared/lens.service';
import { EntitySelectorComponent } from '../../shared/components/entity-selector/entity-selector.component';

@Component({
    selector: 'om-lens-selector',
    templateUrl: '../../shared/components/entity-selector/entity-selector.component.html',
    styleUrls: [
        '../../shared/components/entity-selector/entity-selector.component.css'
    ]
})
export class LensSelectorComponent extends EntitySelectorComponent<Lens, LensService> {

    constructor(
        protected lensService: LensService
    ) {
        super(lensService);

        this.placeholder = 'Lenses';
    }

}

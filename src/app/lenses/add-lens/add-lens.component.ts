import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { LensService } from '../shared/lens.service';
import { AddEntityComponent } from '../../shared/components/add-entity.component';
import { Scope } from '../../shared/models/equipment/equipment';
import { AppContextService } from '../../shared/services/app-context.service';

@Component({
    selector: 'om-add-lens',
    templateUrl: './add-lens.component.html',
})
export class AddLensComponent extends AddEntityComponent<Scope> {

    constructor(
        private router: Router,
        lensService: LensService,
        appContext: AppContextService,
    ) {
        super(lensService, appContext);
    }

    public goBack() {
        this.router.navigate(['/lenses']);
    }
}

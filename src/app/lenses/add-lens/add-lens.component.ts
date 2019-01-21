import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { LensService } from '../shared/lens.service';

import { AddEntityComponent } from '../../shared/components/add-entity.component';
import { Scope } from '../../shared/models/equipment/equipment';

@Component({
    selector: 'om-add-lens',
    templateUrl: './add-lens.component.html'
})

export class AddLensComponent extends AddEntityComponent<Scope> {
    constructor(
        private router: Router,
        private lensService: LensService) {
        super(lensService);
    }

    goBack() {
        this.router.navigate(['/lenses']);
    }
}

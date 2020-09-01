import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { AddEntityComponent } from '../../shared/components/add-entity.component';

import { Target } from '../../shared/models/models';
import { TargetService } from '../shared/target.service';

@Component({
    selector: 'om-add-target',
    templateUrl: './add-target.component.html',
})
export class AddTargetComponent extends AddEntityComponent<Target> {

    constructor(
        private router: Router,
        service: TargetService,
    ) {
        super(service);
    }

    goBack() {
        this.router.navigate(['/objects']);
    }
}

import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { ScopeService } from '../shared/scope.service';

import { AddEntityComponent } from '../../shared/components/add-entity.component';
import { Scope } from '../../shared/models/equipment/equipment';

@Component({
    selector: 'om-add-scope',
    templateUrl: './add-scope.component.html'
})
export class AddScopeComponent extends AddEntityComponent<Scope> {
    constructor(
        private router: Router,
        service: ScopeService) {
        super(service);
    }

    goBack() {
        this.router.navigate(['/scopes']);
    }
}

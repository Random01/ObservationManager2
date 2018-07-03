import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { EditEntityComponent } from '../../shared/components/edit-entity.component';

import { Scope } from '../../shared/models/equipment/equipment';
import { ScopeService } from '../shared/scope.service';

@Component({
    selector: 'om-edit-scope',
    templateUrl: './edit-scope.component.html',
    providers: [ScopeService]
})

export class EditScopeComponent extends EditEntityComponent<Scope> {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private scopeService: ScopeService) {
        super(scopeService);
    }

    getItemId(): string {
        return this.route.snapshot.paramMap.get('id');
    }

    goBack() {
        this.router.navigate(['/scopes']);
    }

}

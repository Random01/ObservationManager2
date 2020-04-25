import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { EditEntityComponent } from '../../shared/components/edit-entity.component';

import { Scope } from '../../shared/models/equipment/equipment';
import { ScopeService } from '../shared/scope.service';

@Component({
    selector: 'om-edit-scope',
    templateUrl: './edit-scope.component.html',
})
export class EditScopeComponent extends EditEntityComponent<Scope> {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        service: ScopeService,
    ) {
        super(service);
    }

    public getItemId(): string {
        return this.route.snapshot.paramMap.get('id');
    }

    public goBack() {
        this.router.navigate(['/scopes']);
    }

}

import { Component } from '@angular/core';

import { Scope } from './../shared/models/equipment/scope.model';
import { ScopeService } from './shared/scope.service';
import { EntityListComponent } from '../shared/components/entity-list.component';

@Component({
    selector: 'om-scopes',
    templateUrl: './scopes.component.html',
    providers: [ScopeService]
})

export class ScopesComponent extends EntityListComponent<Scope> {

    displayedColumns: string[] = [
        'model',
        'aperture',
        'focalLength',
        'vendor',
        'actions'
    ];

    constructor(private scopeService: ScopeService) {
        super(scopeService);
    }

}

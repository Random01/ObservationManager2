import { Component, Input, OnInit } from '@angular/core';

import { Scope } from './../shared/models/equipment/scope.model';
import { ScopeService } from './shared/scope.service';
import { EntityComponent } from '../shared/components/entity-component';
import { Entity } from '../shared/models/models';

@Component({
    selector: 'om-scopes',
    templateUrl: './scopes.component.html',
    providers: [ScopeService]
})

export class ScopesComponent extends EntityComponent<Scope> {

    constructor(private scopeService: ScopeService) {
        super(scopeService);
    }

    createEmpty(): Scope {
        return new Scope();
    }
}

import { Component, Input, OnInit } from '@angular/core';

import { Scope } from './../shared/models/equipment/scope.model';
import { ScopeService } from './shared/scope.service';

@Component({
    selector: 'om-scopes',
    templateUrl: './scopes.component.html',
    providers: [ScopeService]
})

export class ScopesComponent implements OnInit {

    scopes: Scope[];
    selectedScope: Scope;

    constructor(private scopeService: ScopeService) {
    }

    loadScopes(): void {
        this.scopeService.getScopes().then(scopes => this.scopes = scopes);
    }

    onSelect(scope: Scope) {
        this.selectedScope = scope;
    }

    addNewScope() {
        if (this.selectedScope != null) {
            this.scopeService.addScope(this.selectedScope);
        }
    }

    createNew() {
        this.selectedScope = new Scope();
    }

    ngOnInit(): void {
        this.loadScopes();
    }
}
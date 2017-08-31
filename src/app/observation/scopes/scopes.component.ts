import { Component, Input, OnInit } from '@angular/core';
import { Scope } from './../../shared/models/scope.model';
import { ScopeService } from './../../shared/services/scope.service';

@Component({
    selector: 'scopes',
    templateUrl: './scopes.component.html',
    providers: [ ScopeService ]
})

export class ScopesComponent implements OnInit {

    scopes: Scope[];
    selectedScope: Scope;

    constructor(private scopeService: ScopeService) {
    }

    getScopes(): void {
        this.scopeService.getScopes().then(scopes => this.scopes = scopes);
    };

    onSelect(scope: Scope) {
        this.selectedScope = scope;
    }

    ngOnInit(): void {
        this.getScopes();
    }
}
import { Component, Input } from '@angular/core';
import { Scope } from './../../shared/models/scope.model';
import { ScopeService } from './../../shared/services/scope.service';

@Component({
    selector: 'scopes',
    templateUrl: './scopes.component.html'
})

export class ScopesComponent {
    scopes: Scope[];

    constructor(private scopeService: ScopeService) {
    }

    getScopes(): void {
        this.scopeService.getScopes().then(scopes => this.scopes = scopes);
    };

}
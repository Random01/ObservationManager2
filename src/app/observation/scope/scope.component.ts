import { Component, Input } from '@angular/core';
import { Scope } from './../../shared/models/scope.model';

@Component({
    selector: 'scope',
    templateUrl: './scope.component.html'
})

export class ScopeComponent {
    @Input() scope: Scope;
}
import { Component } from '@angular/core';

import { Scope } from '../../shared/models/equipment/equipment';
import { ScopeService } from '../shared/scope.service';
import { EntitySelectorComponent } from '../../shared/components/entity-selector/entity-selector.component';
import { AddScopeDialogService } from '../add-scope-dialog';

@Component({
    selector: 'om-scope-selector',
    templateUrl: '../../shared/components/entity-selector/entity-selector.component.html',
    styleUrls: [
        '../../shared/components/entity-selector/entity-selector.component.css'
    ]
})
export class ScopeSelectorComponent extends EntitySelectorComponent<Scope, ScopeService> {

    constructor(
        protected scopeService: ScopeService,
        protected addScopeDialogService: AddScopeDialogService,
    ) {
        super(scopeService, addScopeDialogService);

        this.placeholder = 'Telecopes, Binocularus & Finders';
    }

}

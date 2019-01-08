import { Component } from '@angular/core';

import { Scope } from '../../shared/models/equipment/scope.model';
import { ScopeService } from '../shared/scope.service';
import { EntityListComponent } from '../../shared/components/entity-list.component';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';

@Component({
    selector: 'om-scopes',
    templateUrl: './scopes.component.html'
})

export class ScopesComponent extends EntityListComponent<Scope> {

    displayedColumns: string[] = [
        'model',
        'aperture',
        'focalLength',
        'vendor',
        'actions'
    ];

    constructor(
        protected scopeService: ScopeService,
        protected deleteEntityDialogService: DeleteEntityDialogService) {
        super(scopeService, deleteEntityDialogService);
    }

}

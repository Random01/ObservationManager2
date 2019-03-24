import { Component } from '@angular/core';

import { Scope } from '../../shared/models/equipment/scope.model';
import { ScopeService } from '../shared/scope.service';
import { EntityListComponent } from '../../shared/components/entity-list.component';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';
import { ActivatedRoute, Router } from '@angular/router';

import { saveAs } from 'file-saver';

@Component({
    selector: 'om-scopes',
    templateUrl: './scopes.component.html',
    styleUrls: ['./scopes.component.css']
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
        protected deleteEntityDialogService: DeleteEntityDialogService,
        protected route: ActivatedRoute,
        protected router: Router) {
        super(scopeService, deleteEntityDialogService, route, router);
    }

    exportToTxt() {
        this.startLoading();

        const request = this.getRequestParams();

        request.page = 0;
        request.size = 100;

        this.scopeService
            .exportItems(request)
            .then((response) => {
                this.endLoading();
                saveAs(response, 'scopes.txt');
            });
    }

}

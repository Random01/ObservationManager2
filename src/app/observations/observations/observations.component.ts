import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observation } from '../../shared/models/models';
import { ObservationService } from '../shared/observation.service';
import { EntityListComponent } from '../../shared/components/entity-list.component';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';
import ObservationSearchParameters from '../observation-search/observation-search-parameters.model';
import { RequestParams } from '../../shared/services/request-params.model';

@Component({
    selector: 'om-observations',
    templateUrl: './observations.component.html',
    styleUrls: [
        './observations.component.css'
    ]
})
export class ObservationsComponent extends EntityListComponent<Observation> {

    searchParameters: ObservationSearchParameters;

    displayedColumns: string[] = [
        'targetName',
        'scopeModel',
        'eyepieceModel',
        'filterModel',
        'result',
        'actions',
    ];

    constructor(
        observationService: ObservationService,
        deleteEntityDialogService: DeleteEntityDialogService,
        route: ActivatedRoute,
        router: Router,
    ) {
        super(observationService, deleteEntityDialogService, route, router);

        this.searchParameters = new ObservationSearchParameters();
    }

    protected getRequestParams(): RequestParams {
        return this.searchParameters;
    }

    search(): void {
        this.loadItems();
    }

}

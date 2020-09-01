import { Component } from '@angular/core';

import { Target } from '../../shared/models/target.model';
import { TargetService } from '../shared/target.service';

import { EntityListComponent } from '../../shared/components/entity-list.component';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';
import { TargetSearchParams } from '../target-search-params/target-search-params.model';
import { RequestParams } from '../../shared/services/request-params.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'om-targets',
    templateUrl: './targets.component.html',
    styleUrls: ['./targets.component.css']
})
export class TargetsComponent extends EntityListComponent<Target> {

    searchParams: TargetSearchParams;

    displayedColumns: string[] = [
        'name',
        'type',
        'constellation',
        'alliases',
        'actions',
    ];

    constructor(
        service: TargetService,
        deleteEntityDialogService: DeleteEntityDialogService,
        route: ActivatedRoute,
        router: Router,
    ) {
        super(service, deleteEntityDialogService, route, router);

        this.searchParams = new TargetSearchParams();
    }

    protected getRequestParams(): RequestParams {
        return this.searchParams;
    }

    onSearch(searchParams: TargetSearchParams) {
        this.searchParams = searchParams;
        this.loadItems();
    }

}

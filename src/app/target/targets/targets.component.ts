import { Component } from '@angular/core';

import { Target } from '../../shared/models/target.model';
import { TargetService } from '../shared/target.service';

import { EntityListComponent } from '../../shared/components/entity-list.component';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';
import { TargetSearchParams } from '../target-search-params/target-search-params.model';

@Component({
    selector: 'om-targets',
    templateUrl: './targets.component.html',
    styleUrls: ['./targets.component.css']
})

export class TargetsComponent extends EntityListComponent<Target> {

    searchParams: TargetSearchParams;

    displayedColumns: string[] = [
        'name',
        'targetType',
        'alliases',
        'description',
        'actions'
    ];

    constructor(
        protected service: TargetService,
        protected deleteEntityDialogService: DeleteEntityDialogService) {
        super(service, deleteEntityDialogService);

        this.searchParams = new TargetSearchParams();
    }

}

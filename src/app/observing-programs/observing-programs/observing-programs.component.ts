import { Component } from '@angular/core';

import { EntityListComponent } from '../../shared/components/entity-list.component';
import { ObservingProgram } from '../../shared/models/observing-program.model';
import { ObservingProgramsService } from '../shared/observing-programs.service';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'om-observing-programs',
    templateUrl: './observing-programs.component.html',
    styleUrls: [
        './observing-programs.component.css'
    ]
})
export class ObservingProgramsComponent extends EntityListComponent<ObservingProgram> {

    displayedColumns: string[] = [
        'name',
        'actions',
    ];

    constructor(
        protected service: ObservingProgramsService,
        protected deleteEntityDialogService: DeleteEntityDialogService,
        protected route: ActivatedRoute,
        protected router: Router) {
        super(service, deleteEntityDialogService, route, router);
    }

}

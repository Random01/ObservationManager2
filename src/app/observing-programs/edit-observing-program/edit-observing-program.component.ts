import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { EditEntityComponent } from '../../shared/components/edit-entity.component';
import { ObservingProgram } from '../../shared/models/observing-program.model';
import { ObservingProgramsService } from '../shared/observing-programs.service';
import { AppContextService } from '../../shared/services/app-context.service';

@Component({
    selector: 'om-edit-observing-program',
    templateUrl: './edit-observing-program.component.html',
})
export class EditObservingProgramComponent extends EditEntityComponent<ObservingProgram> {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        service: ObservingProgramsService,
        appContext: AppContextService,
    ) {
        super(service, appContext);
    }

    getItemId(): string {
        return this.route.snapshot.paramMap.get('programId');
    }

    goBack() {
        this.router.navigate(['/observing-programs']);
    }

}

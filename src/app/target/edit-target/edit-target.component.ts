import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EditEntityComponent } from '../../shared/components/edit-entity.component';
import { TargetService } from '../shared/target.service';
import { Target } from '../../shared/models/models';
import { AppContextService } from '../../shared/services/app-context.service';

@Component({
    selector: 'om-edit-target',
    templateUrl: './edit-target.component.html',
})
export class EditTargetComponent extends EditEntityComponent<Target> {

    constructor(
        private readonly route: ActivatedRoute,
        private readonly router: Router,
        service: TargetService,
        appContext: AppContextService,
    ) {
        super(service, appContext);
    }

    getItemId(): string {
        return this.route.snapshot.paramMap.get('id');
    }

    goBack() {
        this.router.navigate(['/objects']);
    }

}

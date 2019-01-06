import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { AddEntityComponent } from '../../shared/components/add-entity.component';
import { ObservingProgram } from '../../shared/models/observing-program.model';
import { ObservingProgramsService } from '../shared/observing-programs.service';

@Component({
    selector: 'om-add-observing-program',
    templateUrl: './add-observing-program.component.html'
})
export class AddObservingProgramComponent extends AddEntityComponent<ObservingProgram> {
    constructor(
        private router: Router,
        private service: ObservingProgramsService) {
        super(service);
    }

    goBack() {
        this.router.navigate(['/observing-programs']);
    }
}

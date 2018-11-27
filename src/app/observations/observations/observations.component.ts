import { Component, Input, OnInit } from '@angular/core';

import { Observation } from '../../shared/models/models';
import { ObservationService } from '../shared/observation.service';
import { ScopeService } from '../../scopes/shared/scope.service';
import { EntityListComponent } from '../../shared/components/entity-list.component';

@Component({
    selector: 'om-observations',
    templateUrl: './observations.component.html',
    styleUrls: [
        './observations.component.css'
    ],
    providers: [
        ObservationService,
        ScopeService
    ]
})

export class ObservationsComponent extends EntityListComponent<Observation> {

    constructor(private observationService: ObservationService) {
        super(observationService);
    }

}

import { Component, Input, OnInit } from '@angular/core';

import { Observation, Target } from '../../shared/models/models';
import { Scope, Filter, Lens } from '../../shared/models/equipment/equipment';
import { ScopeService } from '../../scopes/shared/scope.service';
import { FilterService } from '../../filters/shared/filter.service';
import { LensService } from '../../lenses/shared/lens.service';

@Component({
    selector: 'om-observation',
    templateUrl: './observation.component.html',
    styleUrls: ['./observation.component.css']
})

export class ObservationComponent implements OnInit {

    @Input() observation: Observation;

    scopes: Scope[];
    targets: Target[];
    filters: Filter[];
    lenses: Lens[];

    constructor(
        private scopeService: ScopeService,
        private filterService: FilterService,
        private lensService: LensService) {
    }

    ngOnInit(): void {
        this.scopeService.getAll().then(scopes => this.scopes = scopes);
        this.filterService.getAll().then(filters => this.filters = filters);
        this.lensService.getAll().then(lenses => this.lenses = lenses);
    }

}

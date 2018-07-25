import { Component, Input, OnInit } from '@angular/core';

import { Observation, Target } from '../../shared/models/models';
import { Scope, Eyepiece, Filter, Lens } from '../../shared/models/equipment/equipment';
import { ScopeService } from '../../scopes/shared/scope.service';
import { EyepieceService } from '../../eyepieces/shared/eyepiece.service';
import { TargetService } from '../../target/shared/target.service';
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
    eyepieces: Eyepiece[];
    targets: Target[];
    filters: Filter[];
    lenses: Lens[];

    constructor(
        private scopeService: ScopeService,
        private eyepieceService: EyepieceService,
        private filterService: FilterService,
        private targetService: TargetService,
        private lensService: LensService) {
    }

    ngOnInit(): void {
        this.scopeService.getAll().then(scopes => this.scopes = scopes);
        this.eyepieceService.getAll().then(eyepieces => this.eyepieces = eyepieces);
        this.targetService.getAll().then(targets => this.targets = targets);
        this.filterService.getAll().then(filters => this.filters = filters);
        this.lensService.getAll().then(lenses => this.lenses = lenses);
    }

    onTargetSelected(target?: Target) {
        if (this.observation != null) {
            this.observation.target = target;
        }
    }
}

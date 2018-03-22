import { Component, Input, OnInit } from '@angular/core';

import { Observation, Target } from './../../shared/models/models';
import { Scope, Eyepiece } from './../../shared/models/equipment/equipment';
import { ScopeService } from './../../scopes/shared/scope.service';
import { EyepieceService } from './../../eyepieces/shared/eyepiece.service';
import { TargetSearchComponent } from './../../target/target-search/target-search.component';
import { TargetService } from './../../target/shared/target.service';

@Component({
    selector: 'om-observation',
    templateUrl: './observation.component.html',
    styleUrls: ['./observation.component.css'],
    providers: [
        ScopeService,
        EyepieceService,
        TargetService
    ]
})

export class ObservationComponent implements OnInit {

    @Input() observation: Observation;

    scopes: Scope[];
    eyepieces: Eyepiece[];
    targets: Target[];

    constructor(
        private scopeService: ScopeService,
        private eyepieceService: EyepieceService,
        private targetService: TargetService) {
    }

    ngOnInit(): void {
        this.scopeService.getAll().then(scopes => this.scopes = scopes);
        this.eyepieceService.getAll().then(eyepieces => this.eyepieces = eyepieces);
        this.targetService.getAll().then(targets => this.targets = targets);
    }
}

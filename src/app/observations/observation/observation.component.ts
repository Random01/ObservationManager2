import { Component, Input, OnInit } from '@angular/core';

import { Observation } from './../../shared/models/models';
import { Scope, Eyepiece } from './../../shared/models/equipment/equipment';
import { ScopeService } from './../../scopes/shared/scope.service';
import { EyepieceService } from './../../eyepieces/shared/eyepiece.service';
import { TargetSearchComponent } from './../../target/target-search/target-search.component';

@Component({
    selector: 'om-observation',
    templateUrl: './observation.component.html',
    styleUrls: [ './observation.component.css' ],
    providers: [
        ScopeService,
        EyepieceService
    ]
})

export class ObservationComponent implements OnInit {

    @Input() observation: Observation;

    scopes: Scope[];
    eyepieces: Eyepiece[];

    constructor(
        private scopeService: ScopeService,
        private eyepieceService: EyepieceService) {
    }

    ngOnInit(): void {
        this.scopeService.getScopes().then(scopes => this.scopes = scopes);
        this.eyepieceService.getAll().then(eyepieces => this.eyepieces = eyepieces);
    }
}

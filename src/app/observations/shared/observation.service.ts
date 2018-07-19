import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { StorageService } from '../../shared/services/storage.service';

import { Observation, Target } from '../../shared/models/models';
import { Scope, Eyepiece, Filter } from '../../shared/models/equipment/equipment';

import { FilterService } from '../../filters/shared/filter.service';
import { ScopeService } from '../../scopes/shared/scope.service';
import { EyepieceService } from '../../eyepieces/shared/eyepiece.service';
import { TargetService } from '../../target/shared/target.service';

@Injectable()
export class ObservationService extends StorageService<Observation> {

    constructor(
        protected http: HttpClient,
        protected scopeService: ScopeService,
        protected filterService: FilterService,
        protected eyepieceService: EyepieceService,
        protected targetService: TargetService) {
        super(http, '/observations');
    }

    deserialize(state: any): Observation {
        state.id = state._id;
        delete state._id;

        const observation = new Observation(state);

        observation.target = this.targetService.deserialize(state.target || {});
        observation.scope = this.scopeService.deserialize(state.scope || {});
        observation.filter = this.filterService.deserialize(state.filter || {});
        observation.eyepiece = this.eyepieceService.deserialize(state.eyepiece || {});

        return observation;
    }

    createNew(): Observation {
        return new Observation({
            target: new Target(),
            scope: new Scope(),
            filter: new Filter(),
            eyepiece: new Eyepiece()
        });
    }

    getSessionObservations(sessionId: string): Promise<Observation[]> {
        const url = `${this.getUrl()}?sessionId=${sessionId}`;

        return new Promise<Observation[]>((success, fail) => {
            this.http.get<Observation[]>(url)
                .subscribe(items => {
                    success(items.map(item => this.deserialize(item)));
                });
        });
    }
}

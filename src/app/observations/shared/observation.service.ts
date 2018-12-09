import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { StorageService } from '../../shared/services/storage.service';

import { Observation, Target } from '../../shared/models/models';
import { Scope, Eyepiece, Filter, Lens } from '../../shared/models/equipment/equipment';

import { FilterService } from '../../filters/shared/filter.service';
import { ScopeService } from '../../scopes/shared/scope.service';
import { EyepieceService } from '../../eyepieces/shared/eyepiece.service';
import { TargetService } from '../../target/shared/target.service';
import { LensService } from '../../lenses/shared/lens.service';
import { JwtService } from '../../auth/shared/jwt.service';

@Injectable()
export class ObservationService extends StorageService<Observation> {

    constructor(
        protected http: HttpClient,
        protected jwtService: JwtService,
        protected scopeService: ScopeService,
        protected filterService: FilterService,
        protected eyepieceService: EyepieceService,
        protected targetService: TargetService,
        protected lensService: LensService) {
        super('/observations', http, jwtService);
    }

    deserialize(state: any): Observation {
        const observation = super.deserialize(state);

        observation.target = this.targetService.deserialize(state.target || {});
        observation.scope = this.scopeService.deserialize(state.scope || {});
        observation.filter = this.filterService.deserialize(state.filter || {});
        observation.eyepiece = this.eyepieceService.deserialize(state.eyepiece || {});
        observation.lens = this.lensService.deserialize(state.lens || {});

        return observation;
    }

    createNew(params?: any): Observation {
        return new Observation(Object.assign({}, {
            target: new Target(),
            scope: new Scope(),
            filter: new Filter(),
            eyepiece: new Eyepiece(),
            lens: new Lens()
        }, params));
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

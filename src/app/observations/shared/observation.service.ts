import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { StorageService } from './../../shared/services/storage.service';

import { Observation, Target } from './../../shared/models/models';
import { Scope, Eyepiece, Filter } from '../../shared/models/equipment/equipment';

@Injectable()
export class ObservationService extends StorageService<Observation> {

    constructor(protected http: HttpClient) {
        super(http, '/observations');
    }

    deserialize(state: any): Observation {
        const observation = new Observation(state);

        observation.target = new Target(state.target);
        observation.scope = new Scope(state.scope);
        observation.filter = new Filter(state.filter);
        observation.eyepiece = new Eyepiece(state.eyepiece);

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

}

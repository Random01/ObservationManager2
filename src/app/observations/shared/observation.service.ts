import { Injectable } from '@angular/core';

import { Observation } from './../../shared/models/models';
import { OBSERVATIONS } from './mock-observations';
import * as _ from "lodash";

@Injectable()
export class ObservationService {

    getObservations(): Promise<Observation[]> {
        return Promise.resolve(OBSERVATIONS);
    }

    getObservation(id: string): Promise<Observation> {
        return Promise.resolve(_.find(OBSERVATIONS, o=>o.id=== id));
    }

    update(observation: Observation): Promise<Boolean> {
        return Promise.resolve(true);
    }

    add(observation: Observation): Promise<String>{
        return Promise.resolve('aaaa-bbbb');
    }

    delete(id: string): Promise<Boolean>{
        return Promise.resolve(true);
    }
}
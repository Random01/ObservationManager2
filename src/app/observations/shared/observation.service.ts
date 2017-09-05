import { Injectable } from '@angular/core';

import { Observation } from './../../shared/models/models';
import { OBSERVATIONS } from './mock-observations';


export class ObservationService {

    getObservations(): Promise<Observation[]> {
        return Promise.resolve(OBSERVATIONS);
    }

    getObservation(id: string): Promise<Observation> {
        return Promise.resolve(OBSERVATIONS[0]);
    }

}
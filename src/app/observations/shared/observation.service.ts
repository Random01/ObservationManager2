import { Injectable } from '@angular/core';
import { Observation } from './../../shared/models/models';

export class ObservationService {

    observations: Observation[]

    getObservations(): Promise<Observation[]> {
        return Promise.resolve(this.observations);
    }

}
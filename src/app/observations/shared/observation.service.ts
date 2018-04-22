import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { StorageService } from './../../shared/services/storage.service';

import { Observation } from './../../shared/models/models';

@Injectable()
export class ObservationService extends StorageService<Observation> {
    constructor(protected http: HttpClient) {
        super(http, '/observations');
    }

    deserialize(state: any): Observation {
        return new Observation(state);
    }

}

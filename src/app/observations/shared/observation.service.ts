import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { StorageService } from '../../shared/services/storage.service';

import { Observation } from '../../shared/models/models';

import { JwtService } from '../../auth/shared/jwt.service';

@Injectable()
export class ObservationService extends StorageService<Observation> {

    constructor(
        protected http: HttpClient,
        protected jwtService: JwtService) {
        super('/observations', http, jwtService);
    }

    public createNew(params?: any): Observation {
        return new Observation(params);
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
